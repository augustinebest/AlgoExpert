const validateSubsequence = (arr, sub) => {
  let subIdx = 0;
  for (const value of arr) {
    if (subIdx === sub.length) break;
    if (sub[subIdx] === value) {
      subIdx++;
    }
  }
  return subIdx === sub.length;
};

console.log(
  validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);
