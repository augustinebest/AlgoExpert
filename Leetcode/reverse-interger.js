const reverseInterger = (str) => {
  if (Number(str) > Math.pow(2, 31) || Number(str) < Math.pow(-2, 31)) return 0;
  const sign = Math.sign(Number(str)) === 1 ? "" : "-";
  const s = String(Math.abs(Number(str)));
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  result = `${sign}${parseInt(result, 10)}`;
  return Number(result) > Math.pow(2, 31) || Number(result) < Math.pow(-2, 31)
    ? 0
    : Number(result);
};

console.log(reverseInterger("123")); //321
console.log(reverseInterger("1534236469")); //0
