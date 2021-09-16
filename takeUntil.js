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

//it will keep collecting items from an array until the callback provided returns a truthy value
const takeUntil = function(array, callback) {
  //create a new array to store the answer
  let result = [];
  //loop through the array
  for (const item of array) {
  //if callback evaluates to false, push the element in the new array
    if (!callback(item)) {
      result.push(item);
    } else {
      //else if callback evaluates to true, stop the function and return the result
      return result;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2])
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])