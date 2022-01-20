// Solution 1
// const sortedSquaredArray = (arr) => {
//   const squaredArray = Array(arr.length).fill(0);
//   for (let i = 0; i < arr.length; i++) {
//     squaredArray[i] = i * i;
//   }
//   return squaredArray.sort((a, b) => a - b);
// };

// Solution 2
const sortedSquaredArray = (array) => {
  const squaredArray = Array(array.length).fill(0);
  let smallArrayIndex = 0;
  let largeArryIndex = array.length - 1;
  for (let i = largeArryIndex; i >= 0; i--) {
    let squareSmall = Math.abs(array[smallArrayIndex]);
    let squareLarge = Math.abs(array[largeArryIndex]);
    squareSmall *= squareSmall;
    squareLarge *= squareLarge;
    if (squareSmall > squareLarge) {
      squaredArray[i] = squareSmall;
      smallArrayIndex++;
    } else {
      squaredArray[i] = squareLarge;
      largeArryIndex--;
    }
  }
  return squaredArray;
};

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
