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



// ---- Implement WITHOUT ---- 
// a function that will return a subset of a given array, removing the unwanted elements
// parameters should be: a source array && itemsToRemove array
// return a new array with only those elements from source that are not present in the itemsToRemove array

const without = (source, itemsToRemove) => {
  let newArray = source;
  for (const item of itemsToRemove) {
    console.log(`itemsToRemove: ${item}`)
    for (let i = 0; i < newArray.length; i++) {
      console.log(`source index ${i}: ${newArray[i]}`);
      if (item === newArray[i]) {
        console.log(`source: ${newArray[i]} matches itemsToRemove: ${item} - splice here`);
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};
// BUG - mutates original array...

// TEST CODES
console.log(without([1, 2, 3, 4], [3, 4])); // => [1, 2];