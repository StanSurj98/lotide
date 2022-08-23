// Our own version of console.assert as a function
const assertEqual = function(actual, expected) {
  // if values match - print to console Assertion Passed: [actual] === [expected] (but with the values filled in)
  // else - print Assertion Failed: [actual] !== [expected] (but with the values filled in)
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The tail should be grabbing everything from an array EXCEPT for the first element
// ex. [1, 2, 3, 4, 5]
// Tail = 2, 3, 4, 5

const tail = function(array) {
  return array.slice(1);
};

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