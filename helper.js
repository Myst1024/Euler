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
