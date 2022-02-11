const findMedianSortedArrays = (nums1, nums2) => {
  const mergedSortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const mergedSortedArrayLength = mergedSortedArray.length;
  const isEven = mergedSortedArrayLength % 2 == 0;
  let median;
  if (isEven) {
    median =
      (mergedSortedArray[mergedSortedArrayLength / 2 - 1] +
        mergedSortedArray[mergedSortedArrayLength / 2]) /
      2;
  } else {
    median = mergedSortedArray[Math.round(mergedSortedArrayLength / 2) - 1];
  }
  return median;
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
