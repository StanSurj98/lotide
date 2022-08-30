const countLetters = (string) => {
  const output = {};
  for (const x of string) {
    if (x !== " ") {
      if (output[x]) { // if the property "x" exists/true in object "output"
        output[x] += 1; // then that property "x" count should be added by 1

      } else { // otherwise, if property "x" doesn't exist/false
        output[x] = 1; // that property "x" will be the FIRST count sent to 1
      }
    }
  }
  return output;
}

module.exports = countLetters;