// Takes in two arrays and looks for strict match; returns true or false
const eqArrays = function(arrayA, arrayB) {
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
  console.log(iAtMid);
  return iAtMid;
};

// create a function that takes in an array
const middle = (array) => {
  let midElm = [];
  index = midIndex(array);
  midElm.push(array[index]);
  console.log(`index num: ${index}, elm pushed: ${array[index]}, new array: ${midElm}`);
  
  // Edge cases; if arr.length < 3, we should get back empty arr []


  // spit out a NEW array; containing the middle-most elements
  return midElm;
}

console.log(middle([1, 2, 3, 4, 5])); // => [3]




// Edge cases; odd # of elms => return the middle
// if arr.length % 2 !== 0; => checks if odd

// Edge cases; even # of elms => return 2 of the middle elms
// if arr.length % 2 === 0; => checks if even 





// Test assertions
// Use assertArraysEqual function to test our new func
