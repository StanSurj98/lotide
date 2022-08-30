// const assertEqual = require("./assertEqual")

// --- Implement countLetters ---
// Takes a sentence of strings, return a count of each of the letters in that string
// ex: countLetters("LHL") => {L: 2, H: 1}
// Spaces can be skipped
// Tips: you can use for...of loops in strings


const countLetters = (string) => {
  // a new object that will store our output
  const output = {};
  // first I need to iterate over all the letters of a string
  for (const x of string) {
    // only if NOT a space
    if (x !== " ") {
      // now my logic to count the xs
      if (output[x]) { // if the property "x" exists/true in object "output"
        output[x] += 1; // then that property "x" count should be added by 1

      } else { // otherwise, if property "x" doesn't exist/false
        output[x] = 1; // that property "x" will be the FIRST count sent to 1
      }
    }
  }
  // return our output AS an object
  return output;
}

// TEST CODES
// const result1 = countLetters("i am stanley")
// const result2 = countLetters("LHL");

// assertEqual(result1.l, 1); // => pass
// assertEqual(result2.L, 1); // => fail


module.exports = countLetters;