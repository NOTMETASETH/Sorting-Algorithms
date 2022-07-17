// The merge sort algorithm (continued)

// The merge sort is a divide-and-conquer algorithm. The idea behind it is to divide the original array into smaller arrays until each small array has only one position, and then merge these smaller arrays into bigger ones until we have a single big array at the end that is sorted.

// Because of the divide-and-conquer approach, the merge sort algorithm is also recursive. We will divide the algorithm into two functions: the first one will be responsible for dividing the array into smaller ones and evoking the helper function that will perform the sort.

----------------------------------------------------------------

// Let's take a look at the main function declared here:


   function mergeSort(array, compareFn = defaultCompare) {
     if (array.length > 1) { // {1} - stop condition (recursive); already sorted.
       const { length } = array;

       // split it into smaller arrays (if bigger than 1)
       // to do so, we need to find the middle of the array first
       const middle = Math.floor(length / 2); // {2}
       const left = mergeSort(array.slice(0, middle), compareFn); // left {3}
       const right = mergeSort(array.slice(middle, length), compareFn); // right {4}
       array = merge(left, right, compareFn); // {5}
     }

     return array;
   }

----------------------------------------------------------------
  // The next steps will be to call the merge function ({5}), which will be responsible for merging and sorting the smaller arrays into bigger ones until we have the original array sorted and back together.
  ----------------------------------------------------------------

  // The merge function is presented here:

unction merge(left, right, compareFn) {
     let i = 0; // {6}
     let j = 0;
     const result = [];
     while (i < left.length && j < right.length) { // {7}
       result.push(
         compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
       ); // {8}
     }
     return result.concat(i < left.length ? left.slice(i) : right.slice(j)); // {9}
   }
