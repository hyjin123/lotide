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

//AssertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
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

// //TEST
// const ab = {
//   a: "1",
//   b: "2",
// }

// const ba = {
//   b: "2",
//   a: "1"
// }

// const abc = {
//   a: "1",
//   b: "2",
//   c: "3"
// }

// eqObjects(ab, ba);
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const abc = { c: "1", d: ["2", 3]};
const def = { d: 2};
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(abc, cd), true);
assertEqual(eqObjects(abc, def), false);