const eqObjects = require("./eqObjects")

// --- Implementing assertObjectsEqual ---
// function takes in 2 objects & console.log() appropriate msg

const assertObjectsEqual = function(actual, expected) {
  // vvv Without line:42, we get [object Object] and [object Object] are/not equal
  const inspect = require('util').inspect; 
  // ^^^ This inspect function is from a utility library we are downloading

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are NOT equal`);
  }
};

// // TEST CODES
// const ob1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// const ob2 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// const ob3 = {
//   a: "1",
//   b: "2",
//   c: "3",
// }
// assertObjectsEqual(ob1, ob2); // => pass
// assertObjectsEqual(ob1, ob3); // => fail

module.exports = assertObjectsEqual;