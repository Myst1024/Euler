let first = 999;
let largest = 0;

const isPalindrome = (val) => {
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

for (first; first > 0; first--) {
  for (let i = first; i > 0; i--) {
    let product = i * first;
    if (isPalindrome(product) && product > largest) {
      largest = product;
    }
  }
}

console.log(largest);
