function bubbleSort(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

// III. Test Case 3:

bubbleSort([3, -9, -12, -1, 8]);

// prints -> [ -12, -9, -1, 3, 8 ]

// II. Test Case 2:

// bubbleSort([20, 20, 31, 56, 1, 12, 12]);

// prints -> [ 1, 12, 12, 20, 20, 31, 56 ]

// I. Test Case 1:

// bubbleSort([5, 3, 8, 2, 1, 4]);

// prints -> [ 1, 2, 3, 4, 5, 8 ]
