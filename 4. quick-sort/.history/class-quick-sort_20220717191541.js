/*

We can see another example of the divide and conquer strategy, with sorting.

A way to sort arrays, called quicksort, is based upon the following premises:

1.) If your array has 0 or 1 elements,do nothing;it's already sorted(this is the base case).

2.) Otherwise,pick some element of the array(called the "pivot") and split the rest of the array into two sub-arrays: the elements less than your pick, and the elements greater than your pick, or equal to it.

3.) Recursively sort each sub-array.

4.) Concatenate both sorted results, with the pivot in-between,to produce the sorted version of the original array.

*/

//---------------------------------

// Let's see a simple version of this -- there are some better-optimized implementations, but we are interested in the recursive logic now.

const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];
    const smaller = arr.slice(1).filter((x) => x < pivot);
    const greaterEqual = arr.slice(1).filter((x) => x >= pivot);
    return [...quicksort(smaller), pivot, ...quicksort(greaterEqual)];
  }
};
console.log(quicksort([22, 9, 60, 12, 4, 56])); // [4, 9, 12, 22, 56, 60]

// [ 4, 9, 12, 22, 56, 60 ]

// Quicksort sorts an array recursively, applying the divide and conquer strategy, to reduce the original problem to smaller ones.
