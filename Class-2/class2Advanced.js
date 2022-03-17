var numberInput = document.getElementById("numberInput").value;
var arrayLength = document.getElementById("arrayLength").value;
// const publishedArray = document.getElementById("publishedArray");
var numberArray = [];
function arrayOfMultiples(numberInput, arrayLength) {
    for (var i = 1; i <= arrayLength; i++) {
        var numberMultiplied = i * numberInput;
        numberArray.push(numberMultiplied);
    }
    console.log(numberArray);
}
// arrayOfMultiples(7, 5);
arrayOfMultiples(numberInput, arrayLength);
console.log(numberArray);
function displayArray() {
    alert("The number array is: " + numberArray);
}
