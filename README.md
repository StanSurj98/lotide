# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stan_surj98/lotide`

**Require it:**

`const _ = require('@stan_surj98/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Asserts strict equality between the contents of two arrays.
* `assertEqual(actual, expected)`: Asserts strict equality between an actual value to an expected value; only supports primitive value comparisons.
* `assertObjectsEqual(actual, expected)`: Asserts strict equality for the full value of an object to an expected object. 
* `countLetters(string)`: Counts the number of occurences of a particular letter within a string. 
* `countOnly(allItems, itemsToCount)`: Returns an array of only items provided in the second parameter. 
* `eqArrays(array1, array2)`: Returns true if two arrays are strictly identical.
* `eqObjects(object1, object2)`: Returns true if two objects are strictly identical.
* `findKey(object, callback)`: Takes in an object, and a callback function. Returns the key of the item passed as an argument to the callback function.
* `findKeyByValue(object, callback)`: Takes an object and a callback. Returns the key of the value passed as an argument to the callback function. 
* `head(array)`: Returns the first element in a given array.
* `letterPositions(string).[letter]`: Takes in any string, and a letter as a property key. Returns an array of all the index positions where the letter occurs.
* `map(array, callback)`: Takes in an array, and a callback. Produces a new array with the modified values passed in to the callback. 
* `middle(array)`: Takes in an array and returns another array of the value(s) of the middle element(s). 
* `tail(array)`: Takes an array, returns everything after the initial element. 
* `takeUntil(array, callback)`: Takes an array, returns everything until conditions are satisfied in the callback function.  
* `without(array, itemsToRemove)`: Takes in a source and itemsToRemove array. Returns an array without the itemsToRemove argument.