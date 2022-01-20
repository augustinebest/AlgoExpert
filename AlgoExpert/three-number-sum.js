const threeNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < array.length - 2; i++) {
    let leftPos = i+1;
		let rightPos = array.length -1;
    while (leftPos < rightPos) {
      const currentSum = array[i] + array[leftPos] + array[rightPos];
      if (currentSum === targetSum) {
        result.push([array[i], array[leftPos], array[rightPos]]);
        leftPos++;
        rightPos--;
      } else if (currentSum < targetSum) {
        leftPos++;
      } else if (currentSum > targetSum) {
        rightPos--;
      }
    }
  }
  return result;
};

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
