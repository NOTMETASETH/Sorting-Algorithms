// The merge sort algorithm (continued)

// The merge sort is a divide-and-conquer algorithm. The idea behind it is to divide the original array into smaller arrays until each small array has only one position, and then merge these smaller arrays into bigger ones until we have a single big array at the end that is sorted.

// Because of the divide-and-conquer approach, the merge sort algorithm is also recursive. We will divide the algorithm into two functions: the first one will be responsible for dividing the array into smaller ones and evoking the helper function that will perform the sort.

----------------------------------------------------------------

// Let's take a look at the main function declared here:
