// Update: moved test codes to test/eqArraysTest.js
// exported the func eqArrays()

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) return false;
  for (let i = 0; i < arrayA.length; i++) {
    // Compare the elements at the same index for each array
    if (arrayA[i] !== arrayB[i]) return false;
  };
  return true;
};

module.exports = eqArrays;