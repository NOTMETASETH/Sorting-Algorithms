// First Version
function pivot(array, start = 0, end = array.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = array[start];
  var swapIdx = start;

  for (var i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, start, swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(array, start = 0, end = array.length - 1) {
  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = array[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(array, start, swapIdx);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
