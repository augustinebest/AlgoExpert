// reverse string with O(1) space
const reverseString = (s) => {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
