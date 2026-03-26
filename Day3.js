// console.log("Hello")

// connection with html file


// Question 1: valid voter : if user greater than 18 than eligible for voating


// let age = Number(prompt("Enter your age"));

// if(isNaN(age)){
//     console.log("Wrong Input");
// }
// else if(age >= 18) {
//     console.log("User is eligible for the voting");
// }
// else {
//     console.log("Not eligible for voting");
// }






// question 2: Discount question
// 0 to 5000       0% Discount 
// 5001 to 7000    5% Discount 
// 7001 to 9000    10% Discount
// more than 9000  20% Discount


// let Ammount = Number(prompt("Enter Ammount"));

// if(isNaN(Ammount)){
//     console.log("Wront input, Please Enter the Total Ammount");
// }
// else if (Ammount <= 5000 && Ammount >= 0) {
//     console.log("No Discount");
//     console.log("Discount ammount is: 0");
//     console.log("Total Pay Ammount: ", Ammount);
// }
// else if (Ammount <= 7000 && Ammount >= 5001) {
//     console.log("Discount Price: 5%");
//     console.log("Discount Ammount is: ", (Ammount * 5 / 100))
//     console.log("Total Pay Ammount: ", (Ammount - (Ammount * 5 / 100)))
// } 
// else if (Ammount >= 7001 && Ammount <= 9000) {
//     console.log("Discount Price: 10%");
//     console.log("Discount Ammount is: ", (Ammount * 10 / 100))
//     console.log("Total Pay Ammount: ", (Ammount - (Ammount * 10 / 100)))
// }
// else {
//     console.log("Discount price: 20%");
//     console.log("Discount Ammount is: ", (Ammount * 20 / 100))
//     console.log("Total Pay Ammount: ", (Ammount - (Ammount * 20 / 100)))
// }



// question 3: Light Bill Calculate
// 0 to 100       Rs. 4.2 / Unit 
// 101 to 200     Rs. 6 / Unit 
// 201 to 400     Rs. 8 / Unit
// more than 400  Rs. 13 / Unit


let Unit = Number(prompt("Enter the Number of units"));
console.log("Total Unit: " + Unit);
let Ammount=0;

if(Unit > 400) {
    Ammount += (Unit - 400) * 13;
    Unit = 400;
}
if(Unit > 200 && Unit <= 400) {
    Ammount += (Unit - 200) * 8;
    Unit = 200;
}
if(Unit >= 101 && Unit <= 200) {
    Ammount += (Unit - 100) * 6;
    Unit = 100;
}
if(Unit > 0 &&  Unit <= 100) {
    Ammount += Unit*4.2;
}


console.log("Total Ammount Pay : " + Ammount);