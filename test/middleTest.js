const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST 
// ...
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 3, 4, 5, 6, 7]) // => [4]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) // => [6, 7]

//should all pass
assertArraysEqual(middle([1]), []); 
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);