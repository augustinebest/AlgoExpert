// Solution 1: Brute-force ==> time: O(N^2) | space O(N)
const arrayOfProducts = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (array[i] !== array[j]) {
        product *= array[j];
      }
      result[i] = product;
    }
  }
  return result;
};

// Solution 2: time O(N) | space O(N)
const arrayOfProducts = (array) => {
  const leftArrayProducts = Array(array.length).fill(1);
  const rightArrayProducts = Array(array.length).fill(1);
  const result = Array(array.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftArrayProducts[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }
  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightArrayProducts[i] = rightRunningProduct;
    rightRunningProduct *= array[i];
  }
  for (let i = 0; i < array.length; i++) {
    result[i] = leftArrayProducts[i] * rightArrayProducts[i];
  }
  return result;
};

// Optimizing solution 2
const arrayOfProducts = (array) => {
  const result = Array(array.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    result[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    result[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }
  return result;
};

console.log(arrayOfProducts([5, 1, 4, 2]));
