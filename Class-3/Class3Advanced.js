// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
