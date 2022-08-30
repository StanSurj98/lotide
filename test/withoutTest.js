const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

// TEST CODES
console.log(without([1, 2, 3, 4], [3, 4])); // => [1, 2];

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // pass

console.log(without(['hi', 'hey', 1, 2, 3], ['2', 1, 'hi'])); // ['hey', 2, 3]
const arr1 = [1, 2, 3, 4, 5];
const rmArr1 = [3, 5]; 
assertArraysEqual(arr1, without(arr1, rmArr1)); // fail
console.log(arr1); // still [1, 2, 3, 4, 5]

assertArraysEqual(without([1, 2, 3, 4, 5], [3, 5]), without(arr1, rmArr1)); // pass

console.log(without(['hi', 'welcome', 'bienvenue', 1, 2, 3, 4, 5], ['bienvenue', 'bienvenue', 3, 4, 4, 4])); // ['hi', 'welcome', 1, 2, 5]