// Error handling: try/catch and throwing your own errors.
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
function safeDivide(a, b) {
  try { return divide(a, b); } catch (err) { return `Error: ${err.message}`; }
}
if (require.main === module) console.log(divide(10, 2), safeDivide(10, 0));
module.exports = { divide, safeDivide };
