// Runnable version of the Postman collection's checks, against the local mock.
// Run: npm test   (starts the mock on an ephemeral port, no network needed)
const { server } = require("../mock-server/server");

let passed = 0, failed = 0;
function check(name, cond) {
  if (cond) { passed++; console.log(`PASS  ${name}`); }
  else { failed++; console.log(`FAIL  ${name}`); }
}

async function main() {
  await new Promise((r) => server.listen(0, r));
  const base = `http://127.0.0.1:${server.address().port}`;
  const j = async (res) => { try { return await res.json(); } catch { return null; } };

  let res = await fetch(`${base}/status`);
  check("GET /status -> 200 UP", res.status === 200 && (await j(res)).status === "UP");

  res = await fetch(`${base}/tools`);
  const tools = await j(res);
  check("GET /tools -> 200 non-empty array", res.status === 200 && Array.isArray(tools) && tools.length > 0);
  check("tools have id/name/category/price/available", tools.every((t) => ["id","name","category","price","available"].every((k) => k in t)));

  res = await fetch(`${base}/tools/4643`);
  check("GET /tools/4643 -> the Bosch Drill", res.status === 200 && (await j(res)).id === 4643);

  res = await fetch(`${base}/tools/999999`);
  check("GET /tools/999999 -> 404", res.status === 404);

  res = await fetch(`${base}/api-clients`, { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientName: "Ravi QA Practice", clientEmail: "ravi.qa.practice@example.com" }) });
  const tokenBody = await j(res);
  check("POST /api-clients -> 201 with accessToken", res.status === 201 && typeof tokenBody.accessToken === "string" && tokenBody.accessToken.length > 0);
  const auth = { Authorization: `Bearer ${tokenBody.accessToken}`, "Content-Type": "application/json" };

  res = await fetch(`${base}/orders`, { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ toolId: 4643, customerName: "No Token" }) });
  check("POST /orders without token -> 401", res.status === 401);

  res = await fetch(`${base}/orders`, { method: "POST", headers: auth,
    body: JSON.stringify({ toolId: 4643, customerName: "Ravi Kalagara", comment: "QA practice order" }) });
  const created = await j(res);
  check("POST /orders with token -> 201 created", res.status === 201 && created.created === true && !!created.orderId);

  res = await fetch(`${base}/orders`, { headers: auth });
  const orders = await j(res);
  check("GET /orders -> lists my order", res.status === 200 && orders.some((o) => o.id === created.orderId));

  res = await fetch(`${base}/orders/${created.orderId}`, { method: "DELETE", headers: auth });
  check("DELETE /orders/:id -> 204", res.status === 204);

  res = await fetch(`${base}/orders`, { headers: auth });
  check("GET /orders after delete -> order gone", !(await j(res)).some((o) => o.id === created.orderId));

  console.log(`\n${passed} passed, ${failed} failed`);
  server.close();
  process.exit(failed ? 1 : 0);
}
main();
