const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

//TEST using eqArrays function
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays([1, 2, 3], [1, 2])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

//TEST using assertEqual function
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => should PASS