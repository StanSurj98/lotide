// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     }
//   };

// --- Implement countOnly ---
// takes in a collection of items (probably an object or array)
// return counts for a specific subset of those items
// items will be strings
// won't count everything, only those we care about

// allItems => array of all strings we look through
// itemsToCount => object specifying WHAT to count for
const countOnly = (allItems, itemsToCount) => {
  // this func should return an object, specifying how many instances of each string were found in allItems array
  const results = {};

  // add code to loop over allItems array and print to console
  for (const item of allItems) {
    // console.log(`Name: ${item}`);
    // inside the loop, 
    // this checks to see if it's true in the object of itemsToCount
    if (itemsToCount[item]){
      // increment the counter for each item:
      //   set a property with that string key to:
      //     the value that was already there (or zero if nothing there) with 1 added to it.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      // console.log(`Results => ${item}: ${results[item]}`);
    }
  }
  return results; 
};



// TEST CODES
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;