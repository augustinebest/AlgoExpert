function change(m, p) {
  const priceList = [0.01, 0.05, 0.1, 0.25, 0.5, 1];
  // const change = Array.from({ length: 6 }, () => 0);
  const change = new Array(priceList.length).fill(0);

  let sub = m - p;
  for (let i = priceList.length - 1; i >= 0; i--) {
    let running = true;
    while (running) {
      if (sub >= priceList[i]) {
        sub = roundTwo(sub - priceList[i]);
        change[i] = change[i] + 1;
      } else {
        running = false;
      }
    }
  }

  return change;
}

function roundTwo(num) {
    return Number(Math.round(num + 'e2')+'e-2')
}

console.log(change(5, 0.99))
console.log(change(3, 0.01))
console.log(change(3.14, 1.99))
console.log(change(0.45, 0.34))