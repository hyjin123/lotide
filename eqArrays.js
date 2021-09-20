const assertEqual = require("./assertEqual");

//Write a function that takes two arrays and returns true or false, based on match
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

module.exports = eqArrays;