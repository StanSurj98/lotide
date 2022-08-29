const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");




// TEST CODES
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])) // => [4, 5]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

const arr1 = ['hello', 'hi', 'goodbye']
const arr2 = ['boom', 'bang', 'foo', 'bar']
console.log(middle(arr1)); // => ['hi']
console.log(middle(arr2)); // => ['bang', 'foo']

// Test assertions
// Use assertArraysEqual function to test our new func
assertArraysEqual(middle([1, 2, 3, 4, 5]), middle([2, 3, 3, 4, 6])); // => pass; since middle is still [3]

assertArraysEqual(middle(['foo', 'bar', 'hey', 'hello']), middle(['world', 'bar', 'hey', 'yo'])); // => pass; ['bar', 'hey']