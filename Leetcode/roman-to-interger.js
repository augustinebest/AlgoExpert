const romanToInterger = (s) => {
  let result = 0;
  const roman = new Map();
  roman.set("I", 1);
  roman.set("V", 5);
  roman.set("X", 10);
  roman.set("L", 50);
  roman.set("C", 100);
  roman.set("D", 500);
  roman.set("M", 1000);
  for (let i = 0; i < s.length; i++) {
    const romanValue = roman.get(s[i]);
    const nextRomanValue = roman.get(s[i + 1]);
    if (romanValue < nextRomanValue) {
      result -= romanValue;
    } else {
      result += romanValue;
    }
  }
  return result;
};

console.log(romanToInterger("XL")); //40
