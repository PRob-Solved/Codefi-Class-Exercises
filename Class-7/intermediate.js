// function parent(x) {
//   return function closure() {
//     // Closure is declared here.
//     return x;
//   };
// }

// const remember = parent("remembers me");
// // Seems like the variable x would be gone after
// // parent is executed, but it's not.

// closure();
// // Returns "remembers me" because the inner
// // function remembers x.
// ```

// **Aim**: Fix the greetingMaker() function to work with the greeting() function.
// The greeting() function has already been created (check the Tests tab).

// _Example_

// ```js
// const greeting = greetingMaker("Hello")
// greeting("James")    ➞    "Hello, James"

function greeting(message) {
  return function (name) {
    return message + " " + name;
  };
}

let sayHello = greeting("Hello");
console.log(sayHello("John")); // Hello John
