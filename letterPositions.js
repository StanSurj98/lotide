const letterPositions = function(sentence) {
  const results = {};
  // first to iterate through the entire string without spaces, but i need index positions
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) { // if object results AT property [letter] exists/true
        results[letter].push(i); // then for the property [letter] (the letter), we push to an array, index number i
      } else { // otherwise... if property [letter] (the letter) doesnt exist yet/false
        results[letter] = []; // we create an empty array for that property
        results[letter].push(i); // we push the index number into that property
      }
    }
  }
  return results;
};

module.exports = letterPositions;