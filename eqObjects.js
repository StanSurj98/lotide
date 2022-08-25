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
  
};