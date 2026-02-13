//Count Consonants
let word = "javascript";
let count = 0;
for(let i = 1; i<11 ; i++){
    let ch = word[i];
    if(ch != "a" && ch != "e" && ch != "i" && ch != "o" && ch!="u"){
        count++;
    }
}
console.log(count);

//Reverse String

let b = "frontend"
let a = "";
for(let i = 7 ; i >=0 ; i--){
    a = a + b[i];
}
console.log(a);

//Sum of numbers
let arr = [5 , 10 , 15 , 20];
let sum = 0;
for( let i = 0; i<4 ; i++){
    sum = sum + arr[i];
}
console.log(sum);

//find largest number
let ar = [7, 5 , 89 , 15 , 30];
let largest = ar[0];
for(let i = 0 ; i<5 ; i++){
    if(ar[i]>largest){
        largest= ar[i];
    }
}
console.log(largest);
