/**
 * returns TRUE if n is prime
 * @param {number} n
 */
export const isPrime = (n) => {
  if (n === 2) {
    return true;
  }
  if (n > 1 && n % 2 !== 0) {
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const LIMIT = 10001;

const findNthPrime = (n) => {
  let count = 0;

  for (let i = 2; count < n; i++) {
    if (isPrime(i)) {
      count++;
      if (count === n) {
        return i;
      }
    }
  }
};
console.log(findNthPrime(LIMIT));
