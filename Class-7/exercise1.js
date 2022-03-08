//    Aim: Write a function `redundantReturn` that takes in a string `str` and returns a function that returns str.

function redundantReturn(str) {
  function returnStr() {
    return str;
  }
  console.log(str);
}

redundantReturn("str");
