const validParentheses = (s) => {
  const result = [];
  s.split("");
  for (let i = 0; i < s.length; i++) {
    const elem = s[i];
    if (elem === "(" || elem === "[" || elem === "{") {
      result.push(elem);
    } else {
      const pop = result.pop();
      if (elem === ")" && pop !== "(") return false;
      if (elem === "]" && pop !== "[") return false;
      if (elem === "}" && pop !== "{") return false;
    }
  }
  if (result.length > 0) return false;
  return true;
};

console.log(validParentheses("()[]{}"));
console.log(validParentheses("(]"));
