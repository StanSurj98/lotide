const assertObjectsEqual = require("../assertObjectsEqual");


// TEST CODES
const ob1 = {
  a: 1,
  b: 2,
  c: 3,
};
const ob2 = {
  a: 1,
  b: 2,
  c: 3,
};
const ob3 = {
  a: "1",
  b: "2",
  c: "3",
}
assertObjectsEqual(ob1, ob2); // => pass
assertObjectsEqual(ob1, ob3); // => fail