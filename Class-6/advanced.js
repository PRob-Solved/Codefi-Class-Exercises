// Create a function that takes three collections of arguments and
//         returns the sum of the product of the grouped numbers. This function is
//         contained in advanced.js

// _Examples_

// ```js
// product([[1,2],[1,1],[2,3]])    ➞    10
// // 1 * 2 + 1 * 1 + 2 * 3

// product([[10,2],[5,0],[2,3]])    ➞    26
// // 10 * 2 + 5 * 0 + 2 * 3

// product([[1,2],[2,3],[3,4]])   ➞    20
// // 1 * 2 + 2 * 3 + 3 * 4

// product([[1,2],[0,3],[3,0]])    ➞    2
// // 1 * 2 + 0 * 3 + 3 * 0
// ```

function makeSum([num1, num2], [num3, num4], [num5, num6]) {
  let group1 = num1 * num2;
  let group2 = num3 * num4;
  let group3 = num5 * num6;
  let sum = group1 + group2 + group3;
  console.log(sum);
  return sum;
}
