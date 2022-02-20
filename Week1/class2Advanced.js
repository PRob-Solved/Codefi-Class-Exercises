const numberInput = document.getElementById("numberInput").value;
const arrayLength = document.getElementById("arrayLength").value;
const publishedArray = document.getElementById("publishedArray");
let numberArray =[ ];

function arrayOfMultiples(numberInput, arrayLength) {
    for (let i = 0; i < arrayLength; i++) {
            let numberMultiplied = i * numberInput;
            numberArray.push(numberMultiplied);
        }
  }

  document.getElementById("publishedArray").innerHTML = console.log(numberArray);
