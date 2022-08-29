// Update: commented out because we're now integrating mocha and chai tests

// const assertEqual = require("../assertEqual");
// const head = require("../head");



// TEST CODES
// Update: converted my test codes to chai style and ran with mocha

// Update: We're going to be implementing mocha and chai's tests
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5')
  });

  it("should return 6 for [6, 3, 7, 1]", () => {
    assert.strictEqual(head([6, 3, 7, 1]), 6)
  });

  it("should return 'blah' for ['blah', 'heyo', 'hiya']", () => {
    assert.strictEqual(head(['blah', 'heyo', 'hiya']), 'blah')
  });

  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined)
  });
});