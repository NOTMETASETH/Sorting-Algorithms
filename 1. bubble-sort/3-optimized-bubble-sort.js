// Optimized BubbleSort (w/o swaps)

function bubbleSortOptimized(array) {
  var swapVoid;
  for (var i = array.length; i > 0; i--) {
    swapVoid = true;
    for (var j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapVoid = false;
      }
    }
    if (swapVoid) break;
  }
  return array;
}

bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]);
// -> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
