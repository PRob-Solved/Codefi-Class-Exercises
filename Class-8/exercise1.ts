function makePlusFunction(baseNumber) {
  return function (num) {
    let sum = baseNumber + num;
    return sum;
  };
}
const plusFive = makePlusFunction(5);
plusFive(2);
console.log(plusFive(2));

// function counter() {
//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//     },
//     print: function () {
//       console.log(count);
//     },
//   };
// }

// let counterOne = counter();

// counterOne.increment();
// counterOne.print();

// Create a function that takes a "base number" as an argument. This function should return another function that takes a new argument and returns the sum of the "base number" and the new argument.

// Please check the examples below for a more precise representation of the behavior expected.

// _Examples_

// ```js
// // Calling makePlusFunction(5) returns a new function that takes an input,
// // and returns the result when adding 5 to it.

// const plusFive = makePlusFunction(5)

// plusFive(2)  // returns 7

// plusFive(-8)    ➞    -3

// // Calling makePlusFunction(10) returns a new function that takes an input,
// // and returns the result when adding 10 to it.

// const plusTen = makePlusFunction(10);

// plusTen(0);

// plusTen(188)    ➞    198

// plusFive(plusTen(0))    ➞    15
// ```

// _Notes_

// - All inputs will be valid numbers.
