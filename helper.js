/**
 * returns the largest prime factor of n
 * Used on: 3
 * @param {number} n
 */
export const largestPrimeFactor = (n) => {
  let largest = 0;
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      if (isPrime(i)) {
        largest = i;
      }
    }
  }
  return largest;
};

/**
 * returns TRUE if n is prime
 * Used on: 3, 7
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

/**
 * returns TRUE if input reads the same backwards and forwards
 * Used on: 4
 * @param {number | string} val
 */
export const isPalindrome = (val) => {
  valString = val.toString();
  if (valString.length === 1) {
    return true;
  }

  for (let i = 0; i < valString.length / 2; i++) {
    if (valString[i] !== valString[valString.length - i - 1]) {
      return false;
    }
  }
  return true;
};

/**
 * returns TRUE if `test` is evenly divisible by all numbers from `lower` to `upper`
 * Used on: 5
 * @param {number} lower
 * @param {number} upper
 * @param {number} test
 */
export const divisibleByAllInRange = (lower, upper, test) => {
  for (lower; lower <= upper; lower++) {
    if (test % lower !== 0) {
      return false;
    }
  }
  return true;
};

/**
 * Squares natural numbers from 1 to limit, then returns their sum
 * Used on: 6
 * @param {number} limit
 */
export const sumOfSquares = (limit) => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i * i;
  }
  return sum;
};

/**
 * Sums natural numbers from 1 to limit, then returns their square
 * Used on: 6
 * @param {number} limit
 */
export const squareOfSum = (limit) => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum * sum;
};

/**
 * Given an inputString of numbers, find the greatest product of 'length' consecutive numbers
 * Used on: 8
 * @param {string} inputString
 * @param {number} length
 */
export const findGreatestProduct = (inputString, length) => {
  let largestProduct = 0;
  let sum;
  for (let i = 0; i < inputString.length - length; i++) {
    sum = 1;
    for (x = 0; x < length; x++) {
      sum *= inputString[i + x];
      if (sum > largestProduct) {
        largestProduct = sum;
      }
    }
  }
  return largestProduct;
};

/**
 * Returns the all sets of numbers [a, b, c] where, given c, a^2 + b^2 = c^2
 * @param {number} c
 */

export const findPythagoreanTriplets = (c) => {
  let foundTriplets = [];
  const cSquared = c * c;
  let b = c - 1;
  while (b > 0) {
    let a = b - 1;
    let bSquared = b * b;
    while (a > 0) {
      if (a * a + bSquared === cSquared) {
        foundTriplets.push([a, b, c]);
      }
      a--;
    }
    b--;
  }
  return foundTriplets;
};

/**
 * returns the sum of a given array of numbers
 * @param {Array[Number]} arr
 */
export const sumArrayValues = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

/**
 * returns the product of a given array of numbers
 * @param {Array[Number]} arr
 */
export const multiplyArrayValues = (arr) => {
  return arr.reduce((a, b) => {
    return a * b;
  });
};
