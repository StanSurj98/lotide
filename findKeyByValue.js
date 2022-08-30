const findKeyByValue = function(object, value) {
  for (const x in object) {
    if (object[x] === value) {
      return x;
    }
  }
};

module.exports = findKeyByValue;