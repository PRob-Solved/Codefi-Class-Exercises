function makeArray(start, end) {
  let myArray = [];
  if (start > end) {
    let newArray = [];
    let newStart = end;
    let newEnd = start;
    for (let i = newStart; i <= newEnd; i++) {
      newArray.push(i);
    }
    myArray = newArray.reverse();
  } else {
    for (let i = start; i <= end; i++) {
      myArray.push(i);
    }
  }
  console.log(myArray);
}
