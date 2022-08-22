/*

// FUNCTION IMPLEMENTATION
const sum = function(a, b) {
  return a + b;
}

// TEST CODE
console.assert(sum(1, 2) === 3); // nothing show cuz it's true
console.assert(sum(1, 2) === 20); // will fail

// BUGGY FUNCTION
const sumBuggy = function(a, b) {
  return a * b;
}

// TEST CODES
console.assert(sumBuggy(1, 2) === 3); // will fail

*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
// before writing the body of this code, i wrote the test codes below, to work incrementally

  // if values match - print to console Assertion Passed: [actual] === [expected] (but with the values filled in)
  // else - print Assertion Failed: [actual] !== [expected] (but with the values filled in)
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE - note: I wrote the test codes BEFORE writing the body of the function
// working INCREMENTALLY is important
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(2345, 'hello');
assertEqual('hi', 'hi');
assertEqual(12, 14);