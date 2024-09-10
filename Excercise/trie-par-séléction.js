//bubble sort

let numbers = [4, 2, 5, 9];

let temps;
for (i = 0; i < numbers.length; i++) {
  for (j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {

      //save value of numbers[i]
      temps = numbers[i]

      //swap position of numbers when first number is smaller than the second number
      numbers[i] = numbers[j]
      numbers[j] = temps
    }
  }
}
console.log(numbers)

//--------------------------------------------------------------------------

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
