const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

// TEST CODES
const words = ["ground", "control", "to", "major", "tom"];
console.log(); // for space

const wordsMapped = map(words, word => word[0]);
console.log(assertArraysEqual(wordsMapped, ["g", "c", "t", "m", "t"])); // pass => arrays are equal

console.log(); // for space

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsMapped = map(nums, num => num**2);
console.log(assertArraysEqual(numsMapped, [1, 4, 9, 16, 25, 36, 49, 64, 81, 100])); // pass => equal arrays

console.log(); // for space

const doggos = ["Astro", "Bella", "Charlie"];
const doggosMapped = map(doggos, dog => dog + " is a dog");
console.log(assertArraysEqual(doggosMapped, ["Astro is a dog", "Bella is a dog", "Charlie is a dog"])); // pass => eq arrays
