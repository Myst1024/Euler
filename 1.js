let sum = 0;

const LIMIT = 1000;

let threes = 3;
let fives = 5;
let i = 0;
while (threes < LIMIT) {
    sum += threes;
    threes += 3;
    i++;
}

while (fives < LIMIT) {
    if (fives % 3 !== 0) {
        sum += fives;

    }     
    fives += 5;
    i++
}

sum
