const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// --- Implement countLetters ---
// Takes a sentence of strings, return a count of each of the letters in that string
// ex: countLetters("LHL") => {L: 2, H: 1}
// Spaces can be skipped
// Tips: you can use for...of loops in strings


const countLetters = (string) => {
  // a new object that will store our output
  const output = {};
  // first I need to iterate over all the letters of a string
  for (const letter of string) {
    // only if NOT a space
    if (letter !== " ") {
      // now my logic to count the letters
      if (output[letter]) { // if the property "letter" exists/true in object "output"
        output[letter] += 1; // then that property "letter" count should be added by 1

      } else { // otherwise, if property "letter" doesn't exist/false
        output[letter] = 1; // that property "letter" will be the FIRST count sent to 1
      }
    }
  }
  // return our output AS an object
  console.log(output);
  return output;
}

// TEST CODES
const result1 = countLetters("i am stanley")
const result2 = countLetters("LHL");

assertEqual(result1.l, 1); // => pass
assertEqual(result2.L, 1); // => fail
