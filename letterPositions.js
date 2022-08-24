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
// --- Implement letterPositions --- 
// will take in a string
// return all the indices in the string where EACH character is found
//  NOT including spaces
// for each letter, we will be returning multiple numbers, the places where the letter shows up
//  meaning we should be returning an array for each property that is the letter

const letterPositions = function(sentence) {
  const results = {};
  // first to iterate through the entire string without spaces
  for (const letter of sentence) {
    if (letter !== " ") {

    }
  }
  return results;
};