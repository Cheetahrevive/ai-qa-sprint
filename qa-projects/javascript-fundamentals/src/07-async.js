// Async: code that waits (like an API call) without freezing everything else.
function fakeApiCall(value, ms = 10) {
  return new Promise((resolve) => setTimeout(() => resolve({ status: 200, data: value }), ms));
}
async function fetchUserName() {
  const res = await fakeApiCall("Ravi");   // await = wait for the promise, then continue
  return res.data;
}
if (require.main === module) fetchUserName().then((n) => console.log("User:", n));
module.exports = { fakeApiCall, fetchUserName };
