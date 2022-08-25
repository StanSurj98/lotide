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

const findKeyByValue = function(object, value) {
  // we need to loop inside the keys of an object
  for (const property in object) {
    // console.log(`${property}: ${object[property]}`); // list out the keys and values in object param
    if (object[property] === value) {
      console.log(`Value: ${value} is inside property: ${property}`) // list out the property if matches value
      // console.log(property);
      return property;
    }
  }
  // and also see the value of those keys
  //  if those values === value (param), return object key as primitive string
  // edge case: if no match, return undefined
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


// TEST CODES => Use assertEqual() but remember, it only compares primitives!

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => pass: "drama" is primitive "string"
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // => pass: "drama" is primitive "string"
assertEqual(findKeyByValue(bestTVShowsByGenre, "Rock n' Roll"), "music"); // => fail: undefined !== "music"
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => pass: undefined is primitive