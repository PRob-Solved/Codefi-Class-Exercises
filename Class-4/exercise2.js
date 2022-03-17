myArray = [true, false, false, true, false];
myArray2 = [false, false, false, false];
function countTrue(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === true) {
            count++;
        }
    }
    console.log(count);
}
