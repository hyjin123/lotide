//AssertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

//write a function that scans an object and returns the first key which contains a given value
const findKeyByValue = function(search, value) {
  for (const item in search) {
    if (search[item] === value) {
      return item;
    }
  }
}

//Alternate solution using Object.keys
// const findKeyByValue = function(search, value) {
//   let newArray = Object.keys(search);
//   for (const item of newArray) {
//     if (search[item] === value) {
//       return item;
//     }
//   }
// }

//TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");