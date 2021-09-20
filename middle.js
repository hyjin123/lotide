// ACTUAL FUNCTION
const middle = function(array) {
  //store the middle element in a new array
  let newArray = [];
  //if the array length is 1 or 2, return an empty array
  if (array.length <= 2) {
    return newArray;
  }
  //if the array has an even number of elements, the new array should have two elements
  if (array.length % 2 === 0) {
    //find the indexes of the 2 middle elements
    let secondMiddleIndex = array.length / 2;
    let firstMiddleIndex = secondMiddleIndex - 1;
    //push the 2 elements into the new array
    newArray.push(array[firstMiddleIndex], array[secondMiddleIndex])
    return newArray;
  } else { //else, if odd number, the new array should have single element
    //find the index of the middle element
    let middleIndex = Math.floor(array.length / 2);
    newArray.push(array[middleIndex]);
    return newArray;
  }
};

module.exports = middle;