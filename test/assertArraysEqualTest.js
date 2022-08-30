const assertArraysEqual = require("../assertArraysEqual")

// // TEST CODES
// assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => pass
// assertArraysEqual([1, 2, 3, 4], ["1", 2, 3, 4]); // => fail
// assertArraysEqual([1, 2, "hello", 4], [1, 2, "hello", 4]); // => pass
// assertArraysEqual([1, 2, "hElLo", 4], [1, 2, "hello", 4]); // => fail

// const arrNums = [1, 2, 3, 4, 5];
// const arrNums2 = [1, 2, 3, 4, 5];
// const arrWords = ['hey', 'hi', 'hello'];
// const nestedArrNum = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const nestedArrNumTwo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// assertArraysEqual(arrNums, arrNums2); // => pass
// assertArraysEqual(arrNums, arrWords); // => fail

// assertArraysEqual(nestedArrNum, nestedArrNumTwo); // => fail - we didnt account for nested arrays yet