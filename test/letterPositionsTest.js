const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

// TEST CODES
letterPositions("hello there"); 
assertArraysEqual(letterPositions("hello").e, [1]); // => pass
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]); // => pass
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); // => pass
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 2, 20, 8]); // => fail