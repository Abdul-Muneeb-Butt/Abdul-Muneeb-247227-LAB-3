
// Task 2: Total
let numbers = [2, 2, 7];

function getTotal() {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log(getTotal());


// Task 3: Largest
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


// Task 4: Bigger than the first
function getAbove() {
    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[0]) {
            count++;
        }
    }

    return count;
}

console.log(getAbove());


// Task 5: Show on the page
document.getElementById("show").addEventListener("click", function() {
    document.getElementById("total").textContent = getTotal();
    document.getElementById("big").textContent = getBig();
    document.getElementById("above").textContent = getAbove();
});
