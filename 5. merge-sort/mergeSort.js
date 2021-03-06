// Merge function from earlier
function merge(array1, array2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    results.push(array2[j]);
    j++;
  }

  return results;
}

// Recrusive Merge Sort
function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
// [ 10, 24, 73, 76]
