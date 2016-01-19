const isPercent = require("../lib");

console.log(isPercent(42));
// => false

console.log(isPercent("42%"));
// => true

console.log(isPercent("42 %"));
// => true

console.log(isPercent("42 % "));
// => true

console.log(isPercent("foo%"));
// => false
