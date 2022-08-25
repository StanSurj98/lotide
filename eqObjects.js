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
  console.log(`Obj1 keys: ${Object.keys(object1)}, Obj2 keys: ${Object.keys(object2)}`);
  // - the NUMBER of keys are the same
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // - the VALUE of each key is the same
    // meaning i have to loop through each value of each property in each object
    for (const property of Object.keys(object1)) {
      // console.log(`${property} in Obj1 contains: ${object1[property]}`); // console what values are in the property of object1 during each iteration 
      if (object1[property] === object2[property]) {
        console.log(object1[property] + " is equal to " + object2[property])
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};


// Third, use assertEqual() to test simple things at first
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false


assertEqual(ab, ba); // => fail; ab && ba are not primitives
assertEqual(ab.a, ba.a); // => pass; "1" === "1", primitives: string