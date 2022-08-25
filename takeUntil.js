const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
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

// takeUntil takes in an array, cb func
const takeUntil = function(array, cb) {
  // empty array to store
  const output = [];

  // slice through the array, starting at the beginning
  for (const x of array) {
    // pass each item into cb func
    if (cb(x)) { 
      // if output of cb => true, exit early
      return output;
    } else {
      // otherwise push each item
      output.push(x); 
    }
  }
};

// TEST CODES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])); // pass

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])); // pass

console.log('---');

const data3 = [1, 2, 3, -1, -2, -3];
const results3 = takeUntil(data3, x => x < 0); // take until negative num
console.log(assertArraysEqual(results3, [1, 2, 3])); // pass 
