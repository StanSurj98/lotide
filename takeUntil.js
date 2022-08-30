const takeUntil = function(array, cb) {
  const output = [];

  // slice through the array, starting at the beginning
  for (const x of array) {
    // pass each item into cb func
    if (cb(x)) { 
      // if output of cb => true, exit early
      return output;
    } else {
      // otherwise push each item
      output.push(x); 
    }
  }
};

module.exports = takeUntil;