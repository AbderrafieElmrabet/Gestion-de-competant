let numbers = [4,2,5,9];

let temps ;
for(i = 0;i<numbers.length;i++){
    for(j=i+1;j<numbers.length;j++){
        if(numbers[i]<numbers[j]){
          temps =  numbers[i]
          numbers[i]=numbers[j]
          numbers[j]=temps  
        }
     }
}
console.log(numbers)
