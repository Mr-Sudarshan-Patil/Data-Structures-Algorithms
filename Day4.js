// Print numbers from 1 to N

// let n = 50;

// for(let i=1; i<=n; i++){
//     console.log(i);
// }



// Sum of 10 numbers 

// let num = 13;
// let Sum = 0;
// for(let i=1; i<=num; i++) {
//     Sum = Sum + i;
// }

// console.log("Sum of Nature numbers 1-10 : " + Sum);



// Factorial of a number
// let number = 10;
// let fact = 1;

// for(let i=1; i<=number; i++){
//     fact *= i; 
// }

// console.log(fact);



// Check if a number is prime


// let num = 999;
// let isPrime = true;

// if(num === 1) {
//     console.log("neighter prime or not composite");
// }
// else {
//     for(let i=2; i<= num-1; i++){
//         if(num%i==0){
//             isPrime = false;
//         }
//     }

//     if(isPrime){
//         console.log("Prime number");
//     }else{
//         console.log("Not a prime");
//     }
// }


// 

// Reverse a number

// let num = 234456;
// let revNo = 0;
// while(num > 0){
//     let lastNo = num % 10; //
//     revNo = revNo * 10 + lastNo;
//     num = Math.floor(num/10);
// }

// console.log(revNo);




// Count digits in a number

// let num = 4563567;
// let Count = 0;

// while(num > 0) {
//     Count++;
//     num = Math.floor(num/10);
// }

// console.log("Counte digit is : " + Count);



// Check palindrome number


// let num = 121;
// let temp = num;
// let revNo = 0;

// while(num > 0){
//     let lastNo = num % 10;
//     revNo = revNo * 10 + lastNo;
//     num = Math.floor(num/10);
// }

// if(temp === revNo) {
//     console.log("Palindrome number")
// }else {
//     console.log("Not a Palindrome number")
// }