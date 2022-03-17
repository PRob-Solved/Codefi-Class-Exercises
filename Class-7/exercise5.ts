// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// _Examples_

// ```js
// toArray({ a: 1, b: 2 })    ➞    [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 })    ➞    [["shrimp", 15], ["tots", 12]]

// toArray({})    ➞    []

function toArray(pairs) {
  const myArray = Object.entries(pairs);
  console.log(myArray);
}

toArray({ shrimp: 15, tots: 12 });
