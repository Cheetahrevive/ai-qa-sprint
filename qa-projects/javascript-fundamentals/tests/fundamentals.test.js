const test = require("node:test");
const assert = require("node:assert/strict");
const { describe } = require("../src/01-variables");
const { add, multiply, greet } = require("../src/02-functions");
const { doubled, under20, total, sortedAsc } = require("../src/03-arrays");
const { roleOf, withCity } = require("../src/04-objects");
const { toJson, fromJson, isValidJson } = require("../src/05-json");
const { divide, safeDivide } = require("../src/06-error-handling");
const { fetchUserName } = require("../src/07-async");

test("variables/template strings", () => assert.equal(describe("Ravi", 13), "Ravi has 13 years of experience"));
test("functions", () => { assert.equal(add(2, 3), 5); assert.equal(multiply(2, 3), 6); assert.equal(greet("Ravi"), "Hello, Ravi!"); });
test("arrays", () => {
  assert.deepEqual(under20([29.99, 9.99, 15.99]), [9.99, 15.99]);
  assert.equal(total([1, 2, 3]), 6);
  assert.deepEqual(sortedAsc([3, 1, 2]), [1, 2, 3]);
  assert.deepEqual(doubled([1, 2]), [2, 4]);
});
test("objects", () => { assert.equal(roleOf({ role: "SDET" }), "SDET"); assert.equal(withCity({ name: "Ravi" }, "Irving").city, "Irving"); });
test("json", () => { assert.equal(toJson({ a: 1 }), '{"a":1}'); assert.equal(fromJson('{"a":1}').a, 1); assert.equal(isValidJson("nope"), false); });
test("error handling", () => { assert.equal(divide(10, 2), 5); assert.match(safeDivide(1, 0), /divide by zero/); assert.throws(() => divide(1, 0)); });
test("async/await", async () => assert.equal(await fetchUserName(), "Ravi"));
