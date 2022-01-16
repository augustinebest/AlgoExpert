// This is not a question from AlgoExpert
const pageNumberCount = (page) => {
  let count = 0;
  if (page < 10) return page;
  for (let i = 1; i <= page; i++) {
    count += String(i).length;
  }
  return count;
};

console.log(pageNumberCount(9));
