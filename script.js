
let numbers = [2, 2, 7];

function getTotal() {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log(getTotal());

function getBig() {
    let big = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > big) {
            big = numbers[i];
        }
    }

    return big;
}

console.log(getBig());


