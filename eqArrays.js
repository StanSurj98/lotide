// Update: moved test codes to test/eqArraysTest.js
// exported the func eqArrays()

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) return false;
  for (let i = 0; i < arrayA.length; i++) {
    // console.log(`arrayA at ${i}`, arrayA[i])
    // console.log(`arrayB at ${i}`, arrayB[i])

    // Compare the elements at the same index for each array
    if (arrayA[i] !== arrayB[i]) return false;
  };
  return true;
};

module.exports = eqArrays;