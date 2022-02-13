const maxArea = function (height) {
  let max = 0;
  let pointerA = 0;
  let pointerB = height.length - 1;
  while (pointerA < pointerB) {
    if (height[pointerA] < height[pointerB]) {
      max = Math.max(max, height[pointerA] * (pointerB - pointerA));
      pointerA++;
    } else {
      max = Math.max(max, height[pointerB] * (pointerB - pointerA));
      pointerB--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxArea([1, 1])); //1
