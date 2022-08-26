// We will now create a version of eqArrays but for Objects
// Deleted my comments, if you want to reach it, just check the last git log
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) { // Guard 1: if array lengths NOT equal => false
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) { // Guard 2: if array values NOT equal => false
      return false;
    }
  }
  return true; // Default: true => guard clauses prevent from getting here
};

// --- The below is my old code for eqObjects ---
/*
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log(`Keys => Obj1: ${keys1} | Obj2: ${keys2}`);
  
  if (keys1.length === keys2.length) {
    for (const property of keys1) {
      const val1 = object1[property];
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
*/



// --- eqObjects refactored --- 
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) { // Guard 1: if lengths !==, false
    console.log(`The number of properties are not equal. Exiting.`);
    return false;
  } else {
    for (const x of keys1) {
      const val1 = object1[x];
      const val2 = object2[x];
      if (Array.isArray(val1)) { // Check: if iteration is an array, else compare values
        if (! eqArrays(val1, val2)) { // Guard 2: if arrays NOT equal, false
          console.log(`The arrays are not equal. Exiting.`);
          return false;
        }
      } else if (val1 !== val2) { // Guard 2: if values NOT equal, false
        console.log(`The values are not equal. Exiting.`);
        return false;
      } else {
        console.log(`Val1:${val1} && Val2: ${val2} are equal at ${x}.`)
      }
    }
  }
  // Default: true => the guard clauses prevent getting here
  return true; 
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false, although both arrays, the contents are different
