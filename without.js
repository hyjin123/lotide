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

//Implement a function which will return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  //store the result in a new array
  let withoutArray = [];
  //loop through the source array
  for (let i = 0; i < source.length; i++) {
    //set the flag to false initially after every index, this will determine whether we add to the new array or not
    let flag = false;
    //loop through the itemsToRemove array
    for (let j = 0; j < itemsToRemove.length; j++) {
      //if there is a match, set the flag to true.
      if (source[i] === itemsToRemove[j]) {
        flag = true;
      }
    }
    //if the flag remains false, push the item into the new array
    if (!flag) {
      withoutArray.push(source[i]);
    }
  }
  return withoutArray;
};

//Return an array with only those elements from source that are not present in itemsToRemove array
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

//Test to see if it returns a new array and not modify the original array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


