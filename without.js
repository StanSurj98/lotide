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
  let result = [];
  // iterate through each element in source
  for (const elm of source) {
    console.log(`Elm of source: ${elm}`);
    // if the elements of source, is NOT included in itemsToRemove...
    if (! itemsToRemove.includes(elm)) {
      console.log(`Elm of source: ${elm} is NOT in itemsToRemove: ${itemsToRemove}`);
      // we push that element to the array that we want to see
      result.push(elm);
      console.log(`Item pushed: ${elm}`)
    }
  }
  return result;
};


// TEST CODES
console.log(without([1, 2, 3, 4], [3, 4])); // => [1, 2];

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without(['hi', 'hey', 1, 2, 3], ['2', 1, 'hi'])); // ['hey', 2, 3]
const arr1 = [1, 2, 3, 4, 5];
const rmArr1 = [3, 5]; 
assertArraysEqual(arr1, without(arr1, rmArr1)); // fail
console.log(arr1); // still [1, 2, 3, 4, 5]

assertArraysEqual(without([1, 2, 3, 4, 5], [3, 5]), without(arr1, rmArr1)); // pass

console.log(without(['hi', 'welcome', 'bienvenue', 1, 2, 3, 4, 5], ['bienvenue', 'bienvenue', 3, 4, 4, 4])); // ['hi', 'welcome', 1, 2, 5]