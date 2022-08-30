const without = (source, itemsToRemove) => {
  let result = [];
  // iterate through each element in source
  for (const elm of source) {
    // if the elements of source, is NOT included in itemsToRemove...
    if (! itemsToRemove.includes(elm)) {
      // we push that element to the array that we want to see
      result.push(elm);
    }
  }
  return result;
};

module.exports = without;