# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software highly recomend you don't use it.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('nasouh94/lotide');` 

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: compares 2 arrays and passes an assertion based on the resualt.
* `assertEqual(...)`: compares 2 strings and passes an assertion based on the resualt.
* `assertObjectsEqual(...)`: compares 2 objects and passes an assertion based on the resualt.
* `eqArrays(...)`: given two arrays as arguments will return true if arrays are equal.
* `eqObjects(...)`: given two objects as arguments will return true if arrays are equal.
* `findKey(...)`: will find the value of a key.
* `findKeyByValue(...)`: will return the key name.
* `flatten(...)`: will merge multiple arrays to a single array.
* `head(...)`: will return the head of the array (first item)
* `tail(...)`: will return the tail of the an array (everything after thr first item)
* `middle(...)`: will return the value in the middle of array.
* `without(...)`: returns a new array excluding the value given in the argument
* `map(...)`: taken an array to map and a callback function,will return a new array based on the results of the callback function.
* `countOnly(...)`: This function should take in a collection of items and return counts for a specific subset of those item.
* `letterPosition(...)`: takes in a sentence and will return an object of letters of the string as values and the number of occurrences as values.