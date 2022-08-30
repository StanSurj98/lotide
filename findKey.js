const findKey = (obj, cb) => {
  // loop thru init obj
  for (const x in obj) {
    // pass thru the keys into cb
    if (cb(obj[x])) {
      return x;
    }
  }
};

module.exports = findKey;