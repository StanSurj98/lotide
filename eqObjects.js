// We will now create a version of eqArrays but for Objects

// First, a copy of assertEqual func
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Sixth, we now want to implement arrays and for when we encounter them, we already built a function for this
const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  // loop through elements of arrayA and arrayB
  for (let i = 0; i < arrayA.length; i++) {
    console.log(`arrayA at ${i}`, arrayA[i])
    console.log(`arrayB at ${i}`, arrayB[i])
    // Compare the elements at the same index for each array
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

// Second, defind the function definition
// eqObjects(object1, object2) takes 2 objects as parameters
// returns true : false based on a perfect strict match

const eqObjects = function(object1, object2) {
  // Fourth, try to implement logic on primitives first
    // 2 objects are equal when: 
  console.log(`Obj1 keys: ${Object.keys(object1)} | Obj2 keys: ${Object.keys(object2)}`);
  
  // if NUMBER of keys are the same
  if (Object.keys(object1).length === Object.keys(object2).length) {

    // if VALUE of each key is the same
    // loop through each key in ONE object
    for (const property of Object.keys(object1)) {
      const value1 = object1[property];
      const value2 = object2[property];
      // Seventh, if we encounter a property that is an array, we should pass that property into our eqArrays() function
      if (Array.isArray(value1)) { // if the current iterated key is an array
        console.log(`Property: ${property} is an array`);
        if (eqArrays(value1, value2)) {
          console.log(`Obj1 => Property: ${property}, Value: ${value1}`);
          console.log(`Obj2 => Property: ${property}, Value: ${value2}`);
        } else {
          return false;
        }
      } else if (value1 === value2) {
        // if the value is the same, return true, the objects are truly equal
        console.log(`Obj1 => Property: ${property}, Value: ${value1}`);
        console.log(`Obj2 => Property: ${property}, Value: ${value2}`);
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return true; // we want everything that can go wrong to exit false immediately but save the true as our default return
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };


// // Third, use assertEqual() to test simple things at first
// // assertEqual(ab, ba); // => fail; ab && ba are not primitives
// // assertEqual(ab.a, ba.a); // => pass; "1" === "1", primitives: string

// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false


// Fifth, good job on primitives, but what if the values have arrays?
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
assertEqual(cd, dc); // fail: not primitives


const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // false, although both arrays, the contents are different
eqObjects(cd, cd2); // => false
assertEqual(cd, cd2); // fail: we aren't built to deal with arrays yet
