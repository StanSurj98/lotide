const assert = require("chai").assert;
const middle = require("../middle");

// Update: implemented chai & mocha tests
// TEST CODES
describe("#middle", () => {
  it("should return [] for arrays with less than 3 items", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return ['hi'] for ['hello', 'hi', 'goodbye']", () => {
    const init = ['hello', 'hi', 'goodbye'];
    const expected = ['hi'];
    assert.deepEqual(middle(init), expected);
  });
  
  it("should return ['bang', 'foo'] for ['boom', 'bang', 'foo', 'bar']", () => {
    const init = ['boom', 'bang', 'foo', 'bar'];
    const expected = ['bang', 'foo'];
    assert.deepEqual(middle(init), expected);
  });
  
  it("should return [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    const init = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [4, 5];
    assert.deepEqual(middle(init), expected);
  });
  
  it("should return [1] for [0, 1, 2]", () => {
    assert.deepEqual(middle([0, 1, 2]), [1]);
  });

});