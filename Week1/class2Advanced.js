const numberInput = document.getElementById("numberInput").value;
const arrayLength = document.getElementById("arrayLength").value;
let publishedArray = document.getElementById("publishedArray");

let numberArray = [];

function arrayOfMultiples(numberInput, arrayLength) {
    for (let i = 1; i <= arrayLength; i++) {
        const numberMultiplied = i * numberInput;
        console.log(numberMultiplied);
        numberArray.push(numberMultiplied)
        return numberArray
    }
    console.log(numberArray)
}

publishedArrary.innerText = numberArray
