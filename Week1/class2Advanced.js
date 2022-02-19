const numberInput = document.getElementById("numberInput").value;
const arrayLength = document.getElementById("arrayLength").value;
const publishedArray = document.getElementById("publishedArray");
let numberArray = [];

function arrayofMultiples(numberInput, arrayLength) {
    while (i <= arrayLength) {
        const numberMultiplied = i * numberInput;
        numberArray.push(numberMultiplied);
        i++;
    }
}

publishedArrary.innerText = numberArray
