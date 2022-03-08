// ## Exercise #4: Intermediate

// **Aim**: Create the function that takes an array with objects and returns the sum of people's budgets.

// _Examples_

// ```js
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])    ➞    65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])    ➞    62600
// ```

// ---

// ---

const myArray = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

const sum = myArray.map((element) => element.budget).reduce((a, b) => a + b, 0);
console.log(sum);
