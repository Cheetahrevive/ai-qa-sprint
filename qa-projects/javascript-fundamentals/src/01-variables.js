// Variables and types. Run: node src/01-variables.js
const name = "Ravi";          // const = value will not be reassigned
let yearsExperience = 13;     // let = value can change
yearsExperience += 1;

function describe(person, years) {
  // A template string uses backticks and ${ } placeholders.
  return `${person} has ${years} years of experience`;
}
if (require.main === module) console.log(describe(name, yearsExperience));
module.exports = { describe };
