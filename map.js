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

//Implement a function that will take in two arrays and console.log correct message
const assertArraysEqual = function(array1, array2) {
  //using the eqArrays function, return true if same array, false if different array
  if (eqArrays(array1, array2) === true) {
    console.log(`👍👍👍Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const result = map(words, word => word[0]);
const result1 = map(words, word => word[1]);
const result2 = map(words, word => word.length);
const result3 = map(words, word => word.toUpperCase());

assertArraysEqual(result, ["g", "c", "t", "m", "t"]);
assertArraysEqual(result1, ["r", "o", "o", "a", "o"]);
assertArraysEqual(result2, [6, 7, 2, 5, 3]);
assertArraysEqual(result3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);