// Local mock of the Simple Tool Rental API — same endpoints and data shape
// as the public practice API, no dependencies. Run: node mock-server/server.js
// (listens on PORT or 3100). The tests start it automatically.
const http = require("http");

const tools = [
  { id: 4643, name: "Bosch Drill", category: "power-tools", price: 25.5, available: true },
  { id: 1234, name: "Step Ladder", category: "access", price: 12.0, available: true },
  { id: 5678, name: "Pressure Washer", category: "cleaning", price: 40.0, available: false },
];
const tokens = new Set();
const orders = [];
let orderSeq = 1;

function send(res, code, obj) {
  const body = obj === undefined ? "" : JSON.stringify(obj);
  res.writeHead(code, { "Content-Type": "application/json" });
  res.end(body);
}
function readBody(req) {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (c) => (data += c));
    req.on("end", () => { try { resolve(JSON.parse(data || "{}")); } catch { resolve({}); } });
  });
}
function authed(req) {
  const h = req.headers.authorization || "";
  return h.startsWith("Bearer ") && tokens.has(h.slice(7));
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  const path = url.pathname;
  if (req.method === "GET" && path === "/status") return send(res, 200, { status: "UP" });
  if (req.method === "GET" && path === "/tools") return send(res, 200, tools);
  const toolMatch = path.match(/^\/tools\/(\d+)$/);
  if (req.method === "GET" && toolMatch) {
    const tool = tools.find((t) => t.id === Number(toolMatch[1]));
    return tool ? send(res, 200, tool) : send(res, 404, { error: "Tool not found" });
  }
  if (req.method === "POST" && path === "/api-clients") {
    const body = await readBody(req);
    if (!body.clientName || !body.clientEmail) return send(res, 400, { error: "clientName and clientEmail are required" });
    const token = "mock-token-" + Math.random().toString(36).slice(2, 12);
    tokens.add(token);
    return send(res, 201, { accessToken: token });
  }
  if (req.method === "POST" && path === "/orders") {
    if (!authed(req)) return send(res, 401, { error: "Unauthorized" });
    const body = await readBody(req);
    const order = { id: "order-" + orderSeq++, toolId: body.toolId, customerName: body.customerName, comment: body.comment || "" };
    orders.push(order);
    return send(res, 201, { created: true, orderId: order.id });
  }
  if (req.method === "GET" && path === "/orders") {
    if (!authed(req)) return send(res, 401, { error: "Unauthorized" });
    return send(res, 200, orders);
  }
  const orderMatch = path.match(/^\/orders\/(.+)$/);
  if (req.method === "DELETE" && orderMatch) {
    if (!authed(req)) return send(res, 401, { error: "Unauthorized" });
    const idx = orders.findIndex((o) => o.id === orderMatch[1]);
    if (idx === -1) return send(res, 404, { error: "Order not found" });
    orders.splice(idx, 1);
    return send(res, 204);
  }
  return send(res, 404, { error: "Not found" });
});

if (require.main === module) {
  const port = process.env.PORT || 3100;
  server.listen(port, () => console.log(`Mock Tool Rental API on http://localhost:${port}`));
}
module.exports = { server };
