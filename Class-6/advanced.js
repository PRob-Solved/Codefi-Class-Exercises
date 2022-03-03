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

function productSum(array) {
  let group1 = array[0][0] * array[0][1];
  let group2 = array[1][0] * array[1][1];
  let group3 = array[2][0] * array[2][1];
  let groupTotal = group1 + group2 + group3;
  console.log(groupTotal);
  return groupTotal;
}
