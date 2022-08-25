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
  // first to iterate through the entire string without spaces, but i need index positions
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      // console.log(`letter at ${i}: ${sentence[i]}`) // => log letters without spaces
      // i want something like results[letter].push(letter[index]);
      if (results[sentence[i]]) { // if object results AT property [sentence[i]] exists/true
        results[sentence[i]].push(i); // then for the property [sentence[i]] (the letter), we push to an array, index number i
      } else { // otherwise... if property [sentence[i]] (the letter) doesnt exist yet/false
        results[sentence[i]] = []; // we create an empty array for that property
        results[sentence[i]].push(i); // we push the index number into that property
      }
    }
  }
  console.log(results);
  return results;
};

letterPositions("hello there"); 
assertArraysEqual(letterPositions("hello").e, [1]); // => pass