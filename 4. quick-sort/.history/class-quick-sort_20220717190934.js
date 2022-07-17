class QuickSort {
sort(array) {
if (array.length > 0) {
this.quickSort(array, 0, array.length - 1); }
}
quickSort(array, low, high) { if (low > high) {
return; }
var i = low;
var j = high;
var threshold = array[low];
// Alternately scanned from both ends of the list while (i < j) {
// Find the first position less than threshold from right to left
while (i < j && array[j] > threshold) { j--;
}
//Replace the low with a smaller number than the
if (i < j)
array[i++] = array[j];
   threshold
// Find the first position greater than threshold from left to right
while (i < j && array[i] <= threshold) { i++;
}
//Replace the high with a number larger than the
if (i < j)
