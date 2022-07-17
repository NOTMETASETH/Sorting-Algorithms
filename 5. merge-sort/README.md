Mergesort

--------------------------------------------

Mergesort works by dividing the array into subarrays until each array has one element.

Then, each subarray is concatenated(merged) in a sorted order

--------------------------------------------


The merge function should add all the elements from both arrays in sorted order in a “result array.”

To do this, the index of each array can be created to keep track of elements already compared.

Once one array exhausts all its elements, the rest can be appended to the result array.

--------------------------------------------

The merging function works by taking the two arrays (left and right) and merging them into one resultant array.

The elements need to be compared as they get merged to preserve order.

Now, the mergeSort function has to partition the bigger array into two separate arrays and recursively call merge.

--------------------------------------------


Time Complexity and Space Complexity:

Time Complexity: O(nlog2(n))
Space Complexity: O(n)

Mergesort has a large space complexity of O(n) because of the need to create n number of arrays to be merged later.

Use mergesort when a stable sort is needed.

A stable sort is one that’s guaranteed not to reorder elements with identical keys.

The merge sort has good performance with a complexity of O(n log n).

A disadvantage of mergesort is that it uses O(n) in space.

--------------------------------------------

Source: Javascript Data Structures and Algorithms by Sammie Bae (Ch.10 Searching and Sorting)

--------------------------------------------
