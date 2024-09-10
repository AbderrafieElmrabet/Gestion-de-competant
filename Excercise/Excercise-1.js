let arr = [6, 10, 2, 4];
let small = arr[0];
let big = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
        small = arr[i];
    }
    if (arr[i] > big) {
        big = arr[i];
    }
}

console.log("biggest number is " + big + " and smallest number is " + small);