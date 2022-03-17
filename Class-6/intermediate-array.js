// Aim: Write a function that returns an array containing all the numbers
// inclusive to that range given the start and end values. This function is
// contained in intermediate-array.js
function makeArray(start, end) {
    var myArray = [];
    if (start > end) {
        var newArray = [];
        var newStart = end;
        var newEnd = start;
        for (var i = newStart; i <= newEnd; i++) {
            newArray.push(i);
        }
        myArray = newArray.reverse();
    }
    else {
        for (var i = start; i <= end; i++) {
            myArray.push(i);
        }
    }
    console.log(myArray);
}
