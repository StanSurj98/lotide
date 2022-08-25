const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// --- Implement findKeysByValue --- 
// search for a key on an object, where its value matches a given value
// this func (object, value);
// scans (object), and return the first KEY; which contains (value)
// if no key found, return undefined






// TEST CODES => Use assertEqual() but remember, it only compares primitives!
