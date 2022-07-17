function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }

    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort([6, 1, 23, 4, 2, 3])); // [1, 2, 3, 4, 6, 23])
// prints => [ 1, 2, 3, 4, 6, 23 ]

// ----------------------------------------------------------------
/*

Time Complexity: O(nlog2(n)) on average; O(n2) for worst case.
Space Complexity: O(log2(n))

*/

// ----------------------------------------------------------------

/*

One downside about a quicksort algorithm is that it could potentially be O(n2) if a bad pivot is always picked.

A bad pivot is one that it does not partition the array evenly. The ideal pivot is the median element of the array.

In addition, a quicksort algorithm takes a bigger space complexity of O(log2(n)) compared to other sorting algorithms because of the call stack in recursion.

Use a quicksort algorithm when the average performance should be optimal. This has to do with the fact that quicksort works better for the RAM cache.

*/

// ----------------------------------------------------------------
