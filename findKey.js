// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// --- Implement findKey --- 
// this func takes an Obj, cb func
// return the FIRST key when cb === true 
// else return undefined

const findKey = (obj, cb) => {
  // loop thru init obj
  for (const x in obj) {
    // pass thru the keys into cb
    if (cb(obj[x])) {
      return x;
    }
  }
};

// // Ex:
// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)) // => "noma"

// // TEST CODES
// const numObj = {
//   first: 1,
//   second: 2,
//   third: 3,
// };
// const result1 = findKey(numObj, x => x === 1); // "first"
// assertEqual(result1, "first"); // pass

// console.log(`---`);

// const animals = {
//   alice: { type: "dog" },
//   bob: { type: "cat" },
//   charlie: { type: "turtle" },
// };
// const result2 = findKey(animals, x => x.type === "turtle"); // charlie
// assertEqual(result2, "charlie"); // pass

// console.log(`---`);

// const profiles = {
//   alice: { age: 40, sex: "F" },
//   bob: { age: 45, sex: "M" },
//   charlie: { age: 60, sex: "M" },
// };
// const result3 = findKey(profiles, x => x.age > 40); // bob
// assertEqual(result3, "bob");


module.exports = findKey;