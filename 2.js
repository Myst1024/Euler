const LIMIT = 4000000;

let current = 2;
let prev = 1
let tempPrev;
let sum = current;

while (current <= LIMIT) {

    tempPrev = prev;
    prev = current;
    current = prev + tempPrev;
    if (current % 2 === 0) sum += current;
}

sum