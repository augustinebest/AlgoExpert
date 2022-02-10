// time: O(N)
var twoSum = function(nums, target) {
  const hash = {};
  for(let i=0; i<nums.length; i++) {
      const potentialSum = target - nums[i];
      if(!(potentialSum in hash)) {
        hash[nums[i]] = i;
      } else {
          return [hash[potentialSum], i]
      }
  }
  return []
};
console.log(twoSum([2,7,11,15], 9))