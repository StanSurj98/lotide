// Update: moved all tests to test/tailTest.js, exported tail() and assertEqual() funcs
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;