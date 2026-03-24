// console.log("hello world");

//  Sum of Two numbers

// let a = 20;
// let b = 30;

// console.log("sum of a + b", a+b);

//  Sum of Two numbers using Third variable

// let c = 30;
// let d = 40;

// let sum = c+d;

// console.log("sum of c + d :", sum);

//  Sum of number plus String 

// console.log(10 + "10"); // 1010
// console.log("10" + 10); // 1010

// if we use plus sign it will consider as concatination other sign conver them to number

// Type cursion
// console.log(10 - "10"); // 0
// console.log("10" - 10); // 0
// console.log("10"*5); // 50
// console.log("10"*"5"); // 50
// console.log(10/"5"); // 2 
// console.log("10"/5); // 2


// 3) Accept and print the answer


//prompt() : in built function to take input from the user
// let result = prompt("Enter something to print");

// console.log(result);



// 4) Swap two variables via 3 methods


// let a = 10;
// let b = 5;

// let c = b;
// b = a;
// a = c;

// console.log("a : ", a); // 5
// console.log("b : ", b); // 10

//  Withought using Third Variable


// let a = 22;
// let b = 53;

// a = a + b;  // 22 + 53 = 75
// b = a - b; // 75 - 53 = 22
// a = a - b; // 75 - 22 = 53

// console.log("a : ", a);
// console.log("b : ", b);

// a = a * b; // 22*53 = 1166
// b = a / b; // 1166 / 53 = 22
// a = a / b; // 1166 / 22 = 53


// console.log("a : ", a);
// console.log("b : ", b);


// Questions Based on Operators

// - Arithmatics : + - * / %
// - Relational operator > < <=, >= , ==
// - Logical operator && ||
// - Unary operator - ++ , --

let a = 11, b = 22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log("a= " + a);
console.log("b=" + b);
console.log("c=" + c);

// 11 + 22 + 11 + 22 + 13 + 24 = 103

console.log([] == []);
