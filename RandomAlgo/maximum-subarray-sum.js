// Kada
const maximumSubArraySum = (array) => {
  let maxSum = array[0];
  let currentSum = array[0];
  for(let i=1; i<array.length; i++) {
    currentSum = Math.max(currentSum+array[i], array[i]);
    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum;
}

// console.log(maximumSubArraySum([-2, 6, 7, -6]))
console.log(maximumSubArraySum([-2,1,-3,4,-1,2,1,-5,4]))