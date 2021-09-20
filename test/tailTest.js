const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("it should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })

  it("it should return a new array and not modify the existing array", () => {
    const existingArray = ["Hello", "Lighthouse", "Labs"];
    tail(existingArray);
    assert.strictEqual(existingArray.length, 3);
  })

  it("it should return [] for ['hello']", () => {
    assert.deepEqual(tail(['hello']), []);
  })

  it("it should return [] for []", () => {
    assert.deepEqual(tail([]), []);
  })
})