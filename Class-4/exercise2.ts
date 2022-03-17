      myArray = [true, false, false, true, false];
      myArray2 = [false, false, false, false];

      function countTrue(array) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
          if (array[i] === true) {
            count++;
          }
        }
        console.log(count);
      }