// We will now create a version of eqArrays but for Objects

// First, a copy of assertEqual func
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Second, defind the function definition
// eqObjects(object1, object2) takes 2 objects as parameters
// returns true : false based on a perfect strict match

const eqObjects = function(object1, object2) {
  // Four, try to implement logic on primitives first
    // 2 objects are equal when: 
  console.log(`Obj1 keys: ${Object.keys(object1)} | Obj2 keys: ${Object.keys(object2)}`);
  
  // the NUMBER of keys are the same
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // the VALUE of each key is the same
    // loop through each value of each property in ONE object
    for (const property of Object.keys(object1)) {
      // if the value is the same, return true, the objects are truly equal
      if (object1[property] === object2[property]) {
        console.log(`Obj1 => Property: ${property}, Value: ${object1[property]}`)
        console.log(`Obj2 => Property: ${property}, Value: ${object2[property]}`)
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


// Third, use assertEqual() to test simple things at first
// assertEqual(ab, ba); // => fail; ab && ba are not primitives
// assertEqual(ab.a, ba.a); // => pass; "1" === "1", primitives: string

console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


// Fifth, good job on primitives, but what if the values have arrays?
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false