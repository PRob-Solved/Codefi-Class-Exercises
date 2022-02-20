const numberInput = document.getElementById("numberInput").value;
const arrayLength = document.getElementById("arrayLength").value;
const publishedArray = document.getElementById("publishedArray");
let numberArray =[ ];

function arrayOfMultiples(numberInput, arrayLength) {
    for (let i = 1; i <= arrayLength; i++) {
            let numberMultiplied = i * numberInput;
            numberArray.push(numberMultiplied);
        }
    console.log(numberArray);
    }
  
// arrayOfMultiples(7, 5);
arrayOfMultiples(7,4);
//   document.getElementById("publishedArray").innerHTML = console.log(numberArray);
console.log(numberArray);