const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("it should return empty array if array length is 1", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("it should return empty array if array length is 2", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("it should [2] if array is [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("it should [3,4] if array is [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
})