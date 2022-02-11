const lengthOfLongestSubstring = (str) => {
  let arr = [];
  let right = 0;
  let left = 0;
  let maxLength = 0;
  while (right < str.length && left < str.length) {
    if (!arr.includes(str[right])) {
      arr.push(str[right]);
      maxLength = Math.max(maxLength, arr.length);
      right++;
    } else {
      arr.shift(str[left]);
      left++;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
