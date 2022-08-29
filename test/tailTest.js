const assert = require("chai").assert;
const tail = require("../tail");

// New chai style test codes
describe("#tail", () => {
  it("should return ['what', 'is', 'up'] for ['yo', 'what', 'is', 'up']", () => {
    const words = ['yo', 'what', 'is', 'up']; 
    const expected =  ['what', 'is', 'up'];
    assert.deepEqual(tail(words), expected);
  });

  it("should return [1, 2, 3, 4, 5] for [0, 1, 2, 3, 4, 5]", () => {
    const initial = [0, 1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    assert.deepEqual(tail(initial), expected);
  });

  it("should return an empty array for []", () => {
    const initial = [];
    const expected = [];
    assert.deepEqual(tail(initial), expected);
  });

  it("should return an empty array for single item [1]", () => {
    const initial = [1];
    const expected = [];
    assert.deepEqual(tail(initial), expected);
  });

});