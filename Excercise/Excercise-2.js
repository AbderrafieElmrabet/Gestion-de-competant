let arr = [3, 7, 3, 5, 10, 7];

let tn;

for (j = 0; j < arr.length; j++)
    for (i = 0; i < arr.length; i++) {
        if (arr[j] == arr[i]) {
            console.log(arr[j])
        }
    }