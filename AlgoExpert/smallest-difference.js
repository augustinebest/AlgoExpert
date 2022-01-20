// time: O(nlogn + mlogm) | space:  O(1) 
const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let arrIdxOne = 0;
  let arrIdxTwo = 0;
  let currentDiff = Infinity;
  let smallest = Infinity;
  let smallestPair = [];
  while (arrIdxOne < arrayOne.length && arrIdxTwo < arrayTwo.length) {
    const currrentArrOne = arrayOne[arrIdxOne];
    const currrentArrTwo = arrayTwo[arrIdxTwo];

    if (currrentArrOne < currrentArrTwo) {
      currentDiff = currrentArrTwo - currrentArrOne;
      arrIdxOne++;
    } else if (currrentArrTwo < currrentArrOne) {
      currentDiff = currrentArrOne - currrentArrTwo;
      arrIdxTwo++;
    } else {
      return [currrentArrOne, currrentArrTwo];
    }
    if (smallest > currentDiff) {
      smallest = currentDiff;
      smallestPair = [currrentArrOne, currrentArrTwo];
    }
  }
  return smallestPair;
};

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
