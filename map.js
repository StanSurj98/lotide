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
// Creating our own .map() 
// take in an array to map && a cb func
// return a NEW array based on the results of the cb

// const words = ["ground", "control", "to", "major", "tom"];

const map = function (arr, cb) {
  const results = [];
  for (const x of arr) {
    results.push(cb(x));
  }
  
  return results;
};

// console.log(); // for space

// const wordsMapped = map(words, word => word[0]);
// console.log(assertArraysEqual(wordsMapped, ["g", "c", "t", "m", "t"])); // pass => arrays are equal

// console.log(); // for space

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsMapped = map(nums, num => num**2);
// console.log(assertArraysEqual(numsMapped, [1, 4, 9, 16, 25, 36, 49, 64, 81, 100])); // pass => equal arrays

// console.log(); // for space

// const doggos = ["Astro", "Bella", "Charlie"];
// const doggosMapped = map(doggos, dog => dog + " is a dog");
// console.log(assertArraysEqual(doggosMapped, ["Astro is a dog", "Bella is a dog", "Charlie is a dog"])); // pass => eq arrays


module.exports = map;
