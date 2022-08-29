const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");



// TEST CODES
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// TEST CODES WITH assertEquals Function
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass