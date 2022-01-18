// Solution 1
// time: O(n) | space: O(1)
const moveElementToEnd = (array, toMove) => {
  let startPointer = 0;
  let endPointer = array.length - 1;
  while (startPointer < endPointer) {
    while (startPointer < endPointer && array[endPointer] === toMove)
      endPointer--;
    if (array[startPointer] === toMove) {
      const temp = array[endPointer];
      array[endPointer] = array[startPointer];
      array[startPointer] = temp;
    }
    startPointer++;
  }
  return array;
};

// Solution 2
// time: O(n) | space: o(n)
const moveElementToEnd = (array, toMove) => {
  let count = 0;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== toMove) {
      result.push(array[i]);
    } else {
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    result.push(toMove);
  }
  return result;
};

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
