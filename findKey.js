//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function takes in an object and a callback.
//it scans the object and return the first key for which the callback returns a truthy value
//if no key is found, it returns undefined
const findKey = (object, callBack) => {
  //loop through the object
  for (const item in object) {
    //pass the object[item] in the callback function and if true, return item
    //ex. if({stars:1}.stars === 2) { return item;}
    if (callBack(object[item])) {
      return item;
    }
  }
  return;
}

module.exports = findKey;

//TEST
// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 3 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // )=> "Ora"

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 3 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "Ora");

// let users = {
//   "barney": {"age": 36, "active": true},
//   "fred": {"age": 40, "active": false},
//   "pebbles": {"age": 1, "active": true}
// };

// const result = findKey(users, x => x.age < 36);
// assertEqual(result, "pebbles");

