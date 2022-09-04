const assertArraysEqual = require("./assertArraysEqual");
// Given a two-dimensional array, create a function that would flatten the array
// Returning a single array with the same values

const arr = [1, 2, 3, [4, 5], 6, [7, 8, 9], 10];

const flatten = (list) => {
  // 1. loop through an array
  // empty array to push into, if elm is array, concat instead.
  const result = [];

  for (const x of list) {
    if (!Array.isArray(x)) result.push(x);
    if (Array.isArray(x)) {
      for (const y of x) {
        result.push(y);
      }
    }
  }
  return result;
};
    

assertArraysEqual(flatten(arr), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);