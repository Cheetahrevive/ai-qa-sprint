// Objects: grouping data, destructuring, spread.
const user = { name: "Ravi", role: "SDET", active: true };
function roleOf(obj) { const { role } = obj; return role; }   // destructuring
function withCity(obj, city) { return { ...obj, city }; }     // spread = copy + add/change
if (require.main === module) console.log(roleOf(user), withCity(user, "Irving"));
module.exports = { user, roleOf, withCity };
