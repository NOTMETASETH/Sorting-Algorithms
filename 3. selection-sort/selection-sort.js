// ----------------------------------------------------------------

// LEGACY VERSION (non ES2015 syntax)

function selectionSort1(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
console.log(selectionSort1([0, 2, 34, 22, 10, 19, 17]));

// returns => [ 0, 2, 10, 17, 19, 22, 34 ]

// ----------------------------------------------------------------

// ES2015 VERSION

function selectionSort2(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort2([0, 2, 34, 22, 10, 19, 17]));
// returns => [ 0, 2, 10, 17, 19, 22, 34 ]

// ----------------------------------------------------------------
/*
Time Complexity: O(n^2)
Space Complexity: O(1)

The time complexity for selection sort is still O(n ^ 2) because of the nested for loop.
*/
//----------------------------------------------------------------
