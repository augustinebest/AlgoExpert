// Solution 1
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

// Solution 2
function twoNumberSum(array, targetSum) {
  const hash = {};
  for (const numbA of array) {
    const numbB = targetSum - numbA;
    if (numbB in hash) {
      return [numbB, numbA];
    } else {
      hash[numbA] = true;
    }
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
