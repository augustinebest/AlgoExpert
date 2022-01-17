// time: O(n) | space: O(1)
const moveElementToEnd = (array, toMove) => {
  let startPointer = 0;
  let endPointer = array.length - 1;
  while (startPointer < endPointer) {
    while (startPointer < endPointer && array[endPointer] === toMove) endPointer--;
    if (array[startPointer] === toMove) {
      const temp = array[endPointer];
      array[endPointer] = array[startPointer];
      array[startPointer] = temp;
    }
    startPointer++;
  }
  return array;
};

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
