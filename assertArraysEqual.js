// Takes in two arrays and looks for strict match; returns true or false
const eqArrays = function(arrayA, arrayB) {
  // loop through elements of arrayA and arrayB
  for (let i = 0; i < arrayA.length; i++) {
    console.log(`arrayA at ${i}: `, arrayA[i])
    console.log(`arrayB at ${i}: `, arrayB[i])
    // Compare the elements at the same index for each array
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arrayA, arrayB) {
  // Create a pass/fail if eqArrays return true/false
  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} and ${arrayB} are equal`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} and ${arrayB} are NOT equal`);
  }
};

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => pass
assertArraysEqual([1, 2, 3, 4], ["1", 2, 3, 4]); // => fail
assertArraysEqual([1, 2, "hello", 4], [1, 2, "hello", 4]); // => pass
assertArraysEqual([1, 2, "hElLo", 4], [1, 2, "hello", 4]); // => fail

const arrNums = [1, 2, 3, 4, 5];
const arrNums2 = [1, 2, 3, 4, 5];
const arrWords = ['hey', 'hi', 'hello'];
const nestedArrNum = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const nestedArrNumTwo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

assertArraysEqual(arrNums, arrNums2); // => pass
assertArraysEqual(arrNums, arrWords); // => fail

assertArraysEqual(nestedArrNum, nestedArrNumTwo); // => fail - we didnt account for nested arrays yet
