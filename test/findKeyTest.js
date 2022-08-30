const assertEqual = require('../assertEqual');
const findKey = require("../findKey");

// Ex:
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

// TEST CODES
const numObj = {
  first: 1,
  second: 2,
  third: 3,
};
const result1 = findKey(numObj, x => x === 1); // "first"
assertEqual(result1, "first"); // pass

console.log(`---`);

const animals = {
  alice: { type: "dog" },
  bob: { type: "cat" },
  charlie: { type: "turtle" },
};
const result2 = findKey(animals, x => x.type === "turtle"); // charlie
assertEqual(result2, "charlie"); // pass

console.log(`---`);

const profiles = {
  alice: { age: 40, sex: "F" },
  bob: { age: 45, sex: "M" },
  charlie: { age: 60, sex: "M" },
};
const result3 = findKey(profiles, x => x.age > 40); // bob
assertEqual(result3, "bob");