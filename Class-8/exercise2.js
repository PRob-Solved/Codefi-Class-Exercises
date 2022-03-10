function toggleCase(text) {
  const myArray = text.split("");
  let myNewArray = [];

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].charCodeAt(0) % 2 === 0) {
      myNewArray.push(myArray[i].toUpperCase());
    } else {
      myNewArray.push(myArray[i].toLowerCase());
    }
  }
  newText = myNewArray.join("");
  console.log(newText);
}

toggleCase("supercalifrajalisticexpialadotious");

// Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

// _Examples_

// ```js
// asciiCapitalize("to be or not to be!")    ➞    "To Be oR NoT To Be!"

// asciiCapitalize("THE LITTLE MERMAID")    ➞    "THe LiTTLe meRmaiD"

// asciiCapitalize("Oh what a beautiful morning.")    ➞    "oH wHaT a BeauTiFuL moRNiNg."
