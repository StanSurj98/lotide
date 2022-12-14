// helper func to find index nb at middle
const midIndex = (array) => {
  // take total num of elms, div by 2, round down => should find our mid index
  const midIndex = Math.floor(array.length / 2);
  return midIndex;
};

// checks if an array length is odd
const isArrOdd = (array) => {
  return array.length % 2 !== 0 ? true : false;
}
// checks if an array length is even
const isArrEven = (array) => {
  return array.length % 2 === 0 ? true : false;
}


const middle = (array) => {
  let midElm = [];
  index = midIndex(array);
  // Edge cases; if arr.length < 3, we should get back empty arr []
  if (array.length < 3) {
    return midElm;
  } else if (isArrOdd(array)) {
    // Edge cases; odd # of elms => return the middle
    midElm.push(array[index]);
    // console.log(`index num: ${index}, elm pushed: ${array[index]}, new array: ${midElm}`);
  } else if (isArrEven(array)) {
    // Edge cases; even # of elms => return 2 of the middle elms
    midElm.push(array[index - 1], array[index]);
    // console.log(`index num: ${index}, elm pushed: ${array[index]}, new array: ${midElm}`);
  } else {
    return "Not valid";
  }
  // spit out a NEW array; containing the middle-most elements
  return midElm;
};

module.exports = middle;
