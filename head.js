// Our own version of console.assert as a function
const assertEqual = function(actual, expected) {
  // if values match - print to console Assertion Passed: [actual] === [expected] (but with the values filled in)
  // else - print Assertion Failed: [actual] !== [expected] (but with the values filled in)
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create a function that will return the FIRST element of an array
const head = function(array) {
  return array[0];
};

// TEST CODES
assertEqual(head([6, 3, 7, 1]), 6); // should pass
assertEqual(head(['blah', 'heyo', 'hiya']), 'heyoo'); // should fail
assertEqual(head([]), undefined); // should pass, I want an empty array [] to return undefined
assertEqual(head([1]), 0); // should fail, single item should be that item
assertEqual(head([1]), 1); // pass