const assertArraysEqual = require("../assertArraysEqual");
const takeUntil = require("../takeUntil");

// TEST CODES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])); // pass

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])); // pass

console.log('---');

const data3 = [1, 2, 3, -1, -2, -3];
const results3 = takeUntil(data3, x => x < 0); // take until negative num
console.log(assertArraysEqual(results3, [1, 2, 3])); // pass 
