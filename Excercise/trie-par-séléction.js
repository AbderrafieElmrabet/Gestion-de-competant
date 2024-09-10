
//selection sort

let len = numbers.length;
for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
        if (numbers[j] < numbers[minIndex]) {
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
    }
}

console.log(numbers)
