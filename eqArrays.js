const assertEqual = function(actual, expected) {
  // if values match - print to console Assertion Passed: [actual] === [expected] (but withthe values filled in)
  // else - print Assertion Failed: [actual] !== [expected] (but with the values filled in)
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Implement a function eqArrays which takes in two arrays and returns true or false, basedon a perfect match.
const eqArrays = function(arrayA, arrayB) {
  // loop through elements of arrayA and arrayB
  for (let i = 0; i < arrayA.length; i++) {
    console.log(`arrayA at ${i}`, arrayA[i])
    console.log(`arrayB at ${i}`, arrayB[i])
    // Compare the elements at the same index for each array
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

// TEST CODES
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// TEST CODES WITH assertEquals Function
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass