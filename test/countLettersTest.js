const assertEqual = require("../assertEqual");
const countLetters = require("../countLetters");

// TEST CODES
const result1 = countLetters("i am stanley")
const result2 = countLetters("LHL");

assertEqual(result1.l, 1); // => pass
assertEqual(result2.L, 1); // => fail

