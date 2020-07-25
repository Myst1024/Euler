let sum = 0;
const LIMIT = 100;

const sumOfSquares = (limit) => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i * i;
  }
  return sum;
};

const squareOfSum = (limit) => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum * sum;
};

console.log(squareOfSum(LIMIT) - sumOfSquares(LIMIT));
