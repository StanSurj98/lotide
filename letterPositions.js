// // Takes in two arrays and looks for strict match; returns true or false
// const eqArrays = function(arrayA, arrayB) {
//   if (arrayA.length !== arrayB.length) {
//     return false;
//   }
//   // loop through elements of arrayA and arrayB
//   for (let i = 0; i < arrayA.length; i++) {
//     console.log(`arrayA at ${i}: `, arrayA[i])
//     console.log(`arrayB at ${i}: `, arrayB[i])
//     // Compare the elements at the same index for each array
//     if (arrayA[i] !== arrayB[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (arrayA, arrayB) {
//   // Create a pass/fail if eqArrays return true/false
//   if (eqArrays(arrayA, arrayB) === true) {
//     console.log(`✅✅✅ Assertion Passed: ${arrayA} and ${arrayB} are equal`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} and ${arrayB} are NOT equal`);
//   }
// };
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
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) { // if object results AT property [letter] exists/true
        results[letter].push(i); // then for the property [letter] (the letter), we push to an array, index number i
      } else { // otherwise... if property [letter] (the letter) doesnt exist yet/false
        results[letter] = []; // we create an empty array for that property
        results[letter].push(i); // we push the index number into that property
      }
    }
  }
  return results;
};

// letterPositions("hello there"); 
// assertArraysEqual(letterPositions("hello").e, [1]); // => pass
// assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]); // => pass
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); // => pass
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 2, 20, 8]); // => fail

module.exports = letterPositions;