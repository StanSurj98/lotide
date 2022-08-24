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



// ---- Implement WITHOUT ---- 
// a function that will return a subset of a given array, removing the unwanted elements
// parameters should be: a source array && itemsToRemove array
// return a new array with only those elements from source that are not present in the itemsToRemove array


// Create a function that takes in two arrays, one original set, one a set of items to remove
const without = (source, itemsToRemove) => {
  // create a variable that holds our new array WITH elements we WANT
  let newArray = [];
  // look through each element in source & compare to itemsToRemove
    // we can use a different variation of eqArrays function
  for (let i = 0; i < source.length; i++) {
    console.log(`Item at ${i}: ${source[i]} | itemsToRemove is ${itemsToRemove[i]}`)
    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);
      console.log(`Item pushed: ${source[i]}`);
    }
  }
  // return that variable, new array
  return newArray; 
}





// TEST CODES
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// Use assertArraysEqual to write test cases for various scenarios.
assertArraysEqual([1, 2, 3], without(["1", "2", 1, "3", 2, 3], ["1", "2", "3"])); // => pass