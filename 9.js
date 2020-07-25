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

for (let i = 1000; i > 0; i--) {
  let triplets = findPythagoreanTriplets(i);
  triplets.forEach((triplet) => {
    if (sumArrayValues(triplet) === 1000) {
      console.log(multiplyArrayValues(triplet));
    }
  });
}

console.log(findPythagoreanTriplets(1000));
/**
 *Given C, B < C.  check all permutations of B, 1 -> C,
 *  For each permutation, check all permutations of A, 1-> B
 *
 *
 */
