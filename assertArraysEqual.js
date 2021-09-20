const eqArrays = require("./eqArrays");

//Implement a function that will take in two arrays and console.log correct message
const assertArraysEqual = function(array1, array2) {
  //using the eqArrays function, return true if same array, false if different array
  if (eqArrays(array1, array2) === true) {
    console.log(`👍👍👍Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

module.exports = assertArraysEqual;