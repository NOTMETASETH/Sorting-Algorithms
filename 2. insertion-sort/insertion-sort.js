// Insertion Sort: works similarly to selection sort by searching the array sequentially and moving the unsorted items into a sorted sublist on the left side of the array.

function insertionSort1(array) {
  var currentValue;
  for (var i = 1; i < array.length; i++) {
    currentValue = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}

console.log(insertionSort1([2, 1, 9, 76, 4]));
// prints => [ 1, 2, 4, 9, 76 ]

// ----------------------------------------------------------------

// The following code implements the insertion sort algorithm.

// The outer for loop iterates over the array indices, and the inner for loop moves the unsorted items into the sorted sublist on the left side of the array.

// Whenever the value in the sorted section is greater than the value in the unsorted section, shift all items in the sorted section over by one.This creates space in which to insert the value.

function insertionSort2(items) {
  var len = items.length,
    value,
    i,
    j;

  for (i = 0; i < len; i++) {
    value = items[i];

    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
  return items;
}

console.log(insertionSort2([6, 1, 23, 4, 2, 3]));
// prints => [ 1, 2, 3, 4, 6, 23 ]

// ----------------------------------------------------------------

/*
Time Complexity: O(n ^ 2)
Space Complexity: O(1)

Again, this sorting algorithm has a quadratic time complexity of O(n2) like bubble and insertion sort because of the nested for loop.

*/

// ----------------------------------------------------------------
