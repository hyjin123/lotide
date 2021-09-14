//Write a function that takes two arrays and returns true or false, based on match
const eqArrays = function(array1, array2) {
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
    console.log(`👍👍👍Assertion Passed: Your Arrays are the same!!`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: Your Arrays are different!`);
  }
};

assertArraysEqual([1,2,3],[1,2,3]);