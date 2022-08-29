// Update: removed initial comments, find on previous git commits

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// Update: moved test codes into lotide/test/assertEqualTest.js

module.exports = assertEqual;