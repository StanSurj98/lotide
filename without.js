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


// Create a function that takes in two arrays, one original set, one a set of items to remove
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
  console.log(source);
  console.log(newArray);
  return newArray;
}

// Edge Case; if an element in source === an element in itemsToRemove, we remove that item
// we can instead push the elements that DO NOT === an element in itemsToRemove to a new array

// make a new empty array to store our subset array into



// TEST CODES
console.log(without([1, 2, 3, 4], [3, 4])); // => [1, 2];
// let arr1 = [1, 2, 3, 4];
// console.log(without(arr1, [2])); // => [1, 3, 4]; also arr1 shouldn't change originally

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["hello", "hi", 3, "hola"], ["boy", "girl", 3])) // => ["hello", "hi", "hola"] 
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// // Use assertArraysEqual to write test cases for various scenarios.
// assertArraysEqual([1, 2, 3], without(["1", "2", 1, "3", 2, 3], ["1", "2", "3"])); // => pass
// assertArraysEqual([1, 2, 3], without(["1", "2", 1, "1", "2", 3, "3", 2], ["1", "2", "3"])); // [1, 2, 3] === [1, 3, 2] ? false => fail
