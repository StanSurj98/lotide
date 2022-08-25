const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log(`Keys => Obj1: ${keys1} | Obj2: ${keys2}`);
  
  if (keys1.length === keys2.length) {
    for (const property of keys1) {
      const value1 = object1[property];
      const value2 = object2[property];
      if (Array.isArray(value1)) { // if the current iterated key is an array
        console.log(`Property: ${property} is an array.`);
        if (eqArrays(value1, value2)) {
          console.log(`These arrays are equal.`);
          console.log(`Obj1 => Property: ${property}, Value: ${value1}`);
          console.log(`Obj2 => Property: ${property}, Value: ${value2}`);
        } else {
          console.log(`The arrays are not equal. Exiting.`);
          return false;
        }
      } else if (value1 === value2) { // if property isn't an array, just compare the value
        console.log(`Values are the same for these properties.`)
        console.log(`Obj1 => Property: ${property}, Value: ${value1}`);
        console.log(`Obj2 => Property: ${property}, Value: ${value2}`);
      } else {
        console.log(`The values are not equal. Exiting.`);
        return false;
      }
    }
  } else {
    console.log(`The number of properties are not equal. Exiting.`);
    return false;
  }
  // we want true as default, we provided a false return for everything that would not satisfy the conditionals
  return true; 
};

// --- Implementing assertObjectsEqual ---
// function takes in 2 objects & console.log() appropriate msg

const assertObjectsEqual = function(actual, expected) {
  // vvv Without line:42, we get [object Object] and [object Object] are/not equal
  const inspect = require('util').inspect; 
  // ^^^ This inspect function is from a utility library we are downloading

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are NOT equal`);
  }
};

// TEST CODES
const ob1 = {
  a: 1,
  b: 2,
  c: 3,
};
const ob2 = {
  a: 1,
  b: 2,
  c: 3,
};
const ob3 = {
  a: "1",
  b: "2",
  c: "3",
}
assertObjectsEqual(ob1, ob2); // => pass
assertObjectsEqual(ob1, ob3); // => fail
