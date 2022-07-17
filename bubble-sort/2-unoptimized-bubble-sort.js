// Unoptimized Bubble-Sort Function

/*

function bubbleSort(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

*/

// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
// -> [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//***********************************************************************************************

// Alternative Version
//

function bubbleSort(array) {
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// -> [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//***********************************************************************************************
