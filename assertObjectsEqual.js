//Array comparison function
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  //make sure they have the same number of keys, if not return false
  if (key1.length !== key2.length) {
    return false;
  }
  for (const item of key1) {
    if (typeof object1[item] === "object") {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
    }
    if (typeof object1[item] === "string" || typeof object1[item] === "number") {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST
object1 = {a: "1", b: "1"};
object2 = {b: "1", a: "1"};
object3 = {a: "2", b: "1"};

assertObjectsEqual(object1, object2)
assertObjectsEqual(object2, object3)