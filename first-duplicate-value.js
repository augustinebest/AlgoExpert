// Solution 1: time: O(N^2) | space: O(1)
const firstDuplicateValue = (array) => {
  let minimumSecondIndex = array.length;
  for (let i = 0; i < array.length; i++) {
    const firstValue = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondValue = array[j];
      if (firstValue === secondValue) {
        minimumSecondIndex = Math.min(minimumSecondIndex, j);
      }
    }
  }
  if (minimumSecondIndex === array.length) return -1;
  return array[minimumSecondIndex];
};

// Solution 2: time: O(N) | O(N)
const firstDuplicateValue = (array) => {
  const set = new Set();
  for (const value of array) {
    if (set.has(value)) {
      return value;
    } else {
      set.add(value);
    }
  }
  return -1;
};

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
