const nonConstructibleChange = (array) => {
  const sortArr = array.sort((a, b) => a - b);
  let startCount = 0;
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] > startCount + 1) return startCount + 1;
    startCount += sortArr[i];
  }
  return startCount + 1;
};

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
