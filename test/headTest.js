const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODES
assertEqual(head([6, 3, 7, 1]), 6); // should pass
assertEqual(head(['blah', 'heyo', 'hiya']), 'heyoo'); // should fail
assertEqual(head([]), undefined); // should pass, I want an empty array [] to return undefined
assertEqual(head([1]), 0); // should fail, single item should be that item
assertEqual(head([1]), 1); // pass