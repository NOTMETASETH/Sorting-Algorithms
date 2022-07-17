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

//----------------------------------------------------------------

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

//----------------------------------------------------------------

/*
Time Complexity: O(n ^ 2)
Space Complexity: O(1)

Again, this sorting algorithm has a quadratic time complexity of O(n2) like bubble
and insertion sort because of the nested for loop.
*/

//----------------------------------------------------------------
