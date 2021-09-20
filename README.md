# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hyjin123/lotide`

**Require it:**

`const _ = require('@/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: return the first element of an array
* `tail(...)`: return all the elements after the first element in an array
* `middle(...)`: return the middle element of an array
* `counterLetters(...)`: return an object that has a count of how many times a certain letter appears in a sentence
* `countOnly(...)`: return an object that has a count of how many times a certain item appears in an array given a criteria
* `findKey(...)`: function takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value
* `letterPositions(...)`: returns an object which states at which indexes the letters appear in
* `map(...)`: function takes in an object and a callback. Creates a new array populated with the results of the callback function
* `takeUntil(...)`: function takes in an array and a callback. It will keep collecting items from an array until the callback provided returns a truthy value
* `without(...)`: function which will return a subset of a given array, removing unwanted elements