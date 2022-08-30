const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


// TEST CODES => Use assertEqual() but remember, it only compares primitives!

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => pass: "drama" is primitive "string"
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // => pass: "drama" is primitive "string"
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => pass: undefined is primitive
