/**
 * returns TRUE if input reads the same backwards and forwards
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
