var sortColors = function (nums) {
  let i = 0;

  let left = 0,
    right = nums.length - 1;

  while (i <= right && left <= right) {
    if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      console.log([nums[left], nums[i]]);
      left++;
      i++;
    } else if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      console.log([nums[right], nums[i]]);
      right--;
    } else {
      i++;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
