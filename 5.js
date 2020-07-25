const LIMIT = 999999999;
const RANGEMAX = 20;

const divisibleByAllInRange = (lower, upper, test) => {
  for (lower; lower <= upper; lower++) {
    if (test % lower !== 0) {
      return false;
    }
  }
  return true;
};

for (let i = 2; i < LIMIT; i += 2) {
  if (divisibleByAllInRange(1, RANGEMAX, i)) {
    console.log(i);
    break;
  }
}
