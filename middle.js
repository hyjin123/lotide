//TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  //if the arrays are not the same length, return false
  if (array1.length !== array2.length) {
    return false;
  }
  //loop through the arrays assuming both arrays are same length
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //if the array indexes don't match, return false
      return false;
    }
  }
  //if the array indexes are all the same, return true
  return true;
};

//Implement a function that will take in two arrays and console.log correct message
const assertArraysEqual = function(array1, array2) {
  //using the eqArrays function, return true if same array, false if different array
  if (eqArrays(array1, array2) === true) {
    console.log(`👍👍👍Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

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

// TEST CODE
// ...
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 3, 4, 5, 6, 7]) // => [4]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) // => [6, 7]

//should all pass
assertArraysEqual(middle([1]), []); 
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);