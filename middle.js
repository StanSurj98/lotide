// Takes in two arrays and looks for strict match; returns true or false
const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  // loop through elements of arrayA and arrayB
  for (let i = 0; i < arrayA.length; i++) {
    // console.log(`arrayA at ${i}: `, arrayA[i])
    // console.log(`arrayB at ${i}: `, arrayB[i])
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

// --- Implement MIDDLE ---
// this func takes in an array
// returns the middle-most element(s) of the given array.
// ONLY return the middle element:
// therefore: [1] => []; || [1, 2] => [];
// arrays with ODD # of elms: [1, 2, 3] => [2]; || [1, 2, 3, 4, 5] => [3];
// arrays with EVEN # of elms: [1, 2, 3, 4] => [2, 3]; || [1, 2, 3, 4, 5, 6] => [3, 4]

// helper func to find index nb at middle
const midIndex = (array) => {
  // take total num of elms, div by 2, round down => should find our mid index
  const iAtMid = Math.floor(array.length / 2);
  return iAtMid;
};

// checks if an array length is odd
const isArrOdd = (array) => {
  return array.length % 2 !== 0 ? true : false;
}
// checks if an array length is even
const isArrEven = (array) => {
  return array.length % 2 === 0 ? true : false;
}


// create a function that takes in an array
const middle = (array) => {
  let midElm = [];
  index = midIndex(array);
  // Edge cases; if arr.length < 3, we should get back empty arr []
  if (array.length < 3) {
    return midElm;
  } else if (isArrOdd(array)) {
    // Edge cases; odd # of elms => return the middle
    midElm.push(array[index]);
    console.log(`index num: ${index}, elm pushed: ${array[index]}, new array: ${midElm}`);
  } else if (isArrEven(array)) {
    // Edge cases; even # of elms => return 2 of the middle elms
    midElm.push(array[index - 1], array[index]);
    console.log(`index num: ${index}, elm pushed: ${array[index]}, new array: ${midElm}`);
  } else {
    return "Not valid";
  }
  // spit out a NEW array; containing the middle-most elements
  return midElm;
}

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