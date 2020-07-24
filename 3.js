
const LIMIT = 600851475143; 

const largestPrimeFactor = (n) => {
    let largest = 0;
    for (let i = 3; i < Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            if (isPrime(i)) {
                largest = i;
            }
        }
    }
    return largest;
}

const isPrime = (n) => {
    if (n > 1 && n % 2 !== 0) {
        for (let i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}
console.log(isPrime(17))
console.log(largestPrimeFactor(LIMIT))
 