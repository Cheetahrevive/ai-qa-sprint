// Functions: declarations, arrow functions, default values.
function add(a, b) { return a + b; }
const multiply = (a, b) => a * b;                    // arrow function
function greet(name, greeting = "Hello") { return `${greeting}, ${name}!`; }
if (require.main === module) { console.log(add(2, 3), multiply(2, 3), greet("Ravi")); }
module.exports = { add, multiply, greet };
