const eqArrays = require("./eqArrays");


// --- eqObjects refactored --- 
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) { // Guard 1: if lengths !==, false
    console.log(`The number of properties are not equal. Exiting.`);
    return false;
  } else {
    for (const x of keys1) {
      const val1 = object1[x];
      const val2 = object2[x];
      if (Array.isArray(val1)) { // Check: if iteration is an array, else compare values
        if (! eqArrays(val1, val2)) { // Guard 2: if arrays NOT equal, false
          console.log(`The arrays are not equal. Exiting.`);
          return false;
        }
      } else if (val1 !== val2) { // Guard 2: if values NOT equal, false
        console.log(`The values are not equal. Exiting.`);
        return false;
      } else {
        console.log(`Val1:${val1} && Val2: ${val2} are equal at ${x}.`)
      }
    }
  }
  // Default: true => the guard clauses prevent getting here
  return true; 
};

module.exports = eqObjects;