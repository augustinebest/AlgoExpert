// time: O(n) | space: o(1)
const monotonicArray = (array) => {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) isNonIncreasing = false;
    if (array[i] < array[i - 1]) isNonDecreasing = false;
  }
  return isNonIncreasing || isNonDecreasing;
};

console.log(monotonicArray([-1, -5, -10, -1100, -1101, -1102, -9001]));

// Non-Increasing: this is when the values descreases as the array grows
// Non-Descresing: this is when the values increases as the array grows
