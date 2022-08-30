const eqObjects = require("./eqObjects")

// --- Implementing assertObjectsEqual ---
// function takes in 2 objects & console.log() appropriate msg

const assertObjectsEqual = function(actual, expected) {
  // vvv Without line:42, we get [object Object] and [object Object] are/not equal
  const inspect = require('util').inspect; 
  // ^^^ This inspect function is from a utility library we are downloading

  if (eqObjects(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are NOT equal`);
  }
};

module.exports = assertObjectsEqual;