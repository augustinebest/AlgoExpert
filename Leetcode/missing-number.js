// time: O(N), space O(1)
const missingNumber = (arr) => {
  let res = 0;
  let cur = 0;
  for(let i=0; i<arr.length;i++) {
    res += i;
    cur += arr[i];
  }
  res += arr.length;
  return res - cur
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))