// time: O(N) | space: O(1)
const longestPeak = (array) => {
  let longestPeakLength = 0;
  let i = 1;
  while (i < array.length - 1) {
    // checking for all peak values
    const isPeak = array[i-1] < array[i] && array[i] > array[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }
    // calculating the length of the peak
    // for the left side from the peak
    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }
    // for the right side after the peak
    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    const currentLongestPeak = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currentLongestPeak);
    i = rightIdx;
  }
  return longestPeakLength;
};

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
