const map = function (arr, cb) {
  const results = [];
  for (const x of arr) {
    results.push(cb(x));
  }
  return results;
};

module.exports = map;
