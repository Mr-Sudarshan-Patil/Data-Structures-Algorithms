// // 1) Last Digit from number

// let num = 4563;

// console.log(num%10); // 3

// // 2) Remove Last Digit from number

// console.log(Math.floor(num/10)); // 456.3 ==> 456

// // last one digit %10 last two digit %100 how much digit i want then increase 0 by multiply and moduled same for first two and last two

// // 3) last two digit from number

// console.log(num%100);// 45.63 ==> 63



// // 2) Remove Last two Digit from number

// console.log(Math.floor(num/100)); // 45.63 ==> 45


// // > < >= <= != 

// console.log(10>5); //true

// console.log(5<10); // true

// console.log(10<5); // false

// console.log(10 != 10); // false

// console.log(10 != 9); // true

// console.log(10 >= 10); // true

// console.log(10 <= 10); // true

// console.log("12" == 12); // true
// console.log("12" == "12"); // true
// console.log(12 === "12"); // false

// let a = 10;

// console.log(a++); // 10 a=11
// console.log(++a); // a=12

// let b = 10;

// console.log(b--); // 10 a = 9
// console.log(--b); // a = 8


//  Math functions 

// 1) Math.round


// console.log(Math.round(10.4)); 10
// console.log(Math.round(10.5)); 11

// console.log(Math.round(10.2)); 10
// console.log(Math.round(10.9)); 11


// 2) Math.floor();


// console.log(Math.floor(10.1)); //10
// console.log(Math.floor(10.3)); //10
// console.log(Math.floor(10.6)); //10
// console.log(Math.floor(10.9)); //10

// // 3) Math.ceil();

// console.log(Math.ceil(10.1)); // 11
// console.log(Math.ceil(10.3)); // 11
// console.log(Math.ceil(10.6)); // 11
// console.log(Math.ceil(10.9)); // 11

// 4) Math.trunc();

// console.log(Math.trunc(18.90));
// console.log(Math.trunc(14.20));
// console.log(Math.trunc(13.70));

// 4) Math.pow();

// console.log(Math.pow(2,3)); // 8
// console.log(Math.pow(2,5)); // 32

// 5) Math.sqrt();

// console.log(Math.sqrt(4)); // 2
// console.log(Math.sqrt(9)); //3

// Math.abs();

// console.log(Math.abs(-15)); // 15
// console.log(Math.abs(-25)); // 25
// console.log(Math.abs(-20)); // 20

// Math.max();

// console.log(Math.max(45, 67, 97, 23, 5));  // 97

// Math.min()

// console.log(Math.min(45, 67, 97, 23, 5)); // 5

// Math.random()

// let randomNo = Math.floor((Math.random() * 10) + 1);
// console.log(randomNo); // 0 to 10




// ===========================================Math Problems============================

// 1) Calculate area and perimeter of rectangle


const length = 6;
const breadth  = 6;

let AoR = length * breadth ;
let perimeter = 2 * (length + breadth )

console.log("Area of rectangle is: ", AoR);
console.log("Area of rec perimeter : ", perimeter);