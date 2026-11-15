// Arrays: map (transform), filter (keep some), reduce (combine), find.
const prices = [29.99, 9.99, 15.99, 49.99, 7.99];
const doubled = (arr) => arr.map((p) => p * 2);
const under20 = (arr) => arr.filter((p) => p < 20);
const total = (arr) => arr.reduce((sum, p) => sum + p, 0);
const sortedAsc = (arr) => [...arr].sort((a, b) => a - b);
if (require.main === module) console.log(under20(prices), total(prices).toFixed(2), sortedAsc(prices));
module.exports = { doubled, under20, total, sortedAsc, prices };
