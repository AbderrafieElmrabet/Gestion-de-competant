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
