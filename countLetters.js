//AssertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

//this function should take in a sentence and then return
// a count of each of the letters in that sentence
const countLetters = function(sentence) {
  let results = {};
  for (const item of sentence) {
    if (item !== " ") {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

module.exports = countLetters;

// TEST CODE -- should pass
// let result = countLetters("LHL");
// assertEqual(result["L"], 2);

// let result1 = countLetters("lighthouse in the house");
// console.log(result1);
// assertEqual(result1["h"], 4);
// assertEqual(result1["e"], 3);

// let result2 = countLetters("yooo");
// assertEqual(result2["y"], 1);
// assertEqual(result2["o"], 3);