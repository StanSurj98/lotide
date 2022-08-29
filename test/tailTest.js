const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST CODES
const words = ['yo', 'what', 'is', 'up'];
const tailOfWords = tail(words);


assertEqual(tailOfWords.length, 3); // pass
assertEqual(words.length, 3); // fail
assertEqual(tail([0, 1, 2, 3, 4, 5]).length, 5); // pass

console.log('-------------------');

// must check these test down here
assertEqual(tail([]), 0); // fail
console.log(tail([]));
console.log(tail([1]));