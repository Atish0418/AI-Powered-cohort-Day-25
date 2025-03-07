// Math Functions

// 1) Math.ceil()
console.log("Math ceil : " +Math.ceil(10.4));

// 2) Math.floor()
console.log("Math floor : "+Math.floor(10.7));

// 3) Math.round()
console.log("Math round : "+Math.round(10.5));
console.log("Math round : "+Math.round(10.4));

// 4) Math.abs() ==> absolute
// converts -ve to +ve
console.log("Math absolute : " +Math.abs(-8));

// 5) Math.trunc()
console.log("Math trunc : "+Math.trunc(10.12345678));

// 6) Math.pow()
// take two parameters
console.log("Power : " + Math.pow(5, 2));

// 7) Math.sqrt()
console.log("Math sqaure root : " + Math.sqrt(25));

// 8) Math.cbrt() ==> cube root
console.log("math cube root : " +Math.cbrt(27));


// 9) Math.max() ==> returns max value
console.log("Max value : " + Math.max(10, 67, 90, 4));

// 10) Math.min() ==> returns min value
console.log("Max value : " + Math.min(10, 67, 90, 4));

// 11) Math.random() ==> gives random value between 0 to 9.
console.log("random value everytime : " +Math.random());

// .toFixed() ==> gives exact digit after point/decimal. 
// let a = 234.12345678;
// console.log("Gives 2 digits after the point : " +a.toFixed(2));

// Math Problems (Questions) 
// // 1) Calculate compound interest
// let p = Number(prompt("Enter principle")); //1200
// let r = Number(prompt("Enter rate")); // 5.4
// let t = Number(prompt("Enter time")); // 2

// console.log("Compound Interest is " +(p*Math.pow(1 + r/100, t) - p)); // 133.0992

// 2) Generate OTP
console.log("Unique OTP everytime : " +Math.floor(Math.random()*9000 + 1000));

// 3) Area of triangle by Hero's Formula
// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let num3 = Number(prompt("Enter third number"));

// if((num1 + num2 < num3) || (num1 + num3 <=num2) || (num3 + num2 <= num1)){
//     console.log("Not possinle");
// }
// else{
//     let s = (num1 + num2 + num3)/2;
//     console.log(Math.sqrt(s*(s-num1)*(s-num2)*(s-num3)));
// }

// 4) Circumference of circle
// let r = Number(prompt("Enter a number"));
// console.log(2*Math.PI*r);


// if-else ==> questions
// 1) Accept two numbers and print the greatest between them
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));

// if(a>b){
//     console.log(a+ " is greater than "+ b);
// }
// else{
//     console.log(b+ " is greater than "+ a);
// }

// 2) Accept an integer and check it is an even number or not.
// let a = Number(prompt("Enter an number"));

// if(a % 2 === 0) console.log(a+ " is an even number");
// else console.log(a+ " is an odd number");

// 3) Name and age from the user. Check if the user is a valid voter or not.
// var userName = prompt("Enter your name!");
// let age = Number(prompt("Enter your age!"));    

// if(age>=18){
//     console.log(userName+ "! Yes, you are a valid voter.");
// }
// else{
//     console.log(userName+ "! no, you are a valid voter.");
// }

// 4) Accept the three numbers and print the greatest among them
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));
// let c = Number(prompt("Enter third number"));

// if(a>b){
//     console.log(a+" is greater than "+b+ " and "+c);   
// }
// else if(c>b){
//     console.log(c+" is greater than "+a+ " and "+b);
// }
// else{
//     console.log(b+" is greater than "+a+ " and "+c);
// }

// 5) Accept a year and check if it is a leap year or not
let year = Number(prompt("Enter a year!"));

if((year % 4 == 0) && (year % 100 != 0) || (year % 400 ==0)){
    console.log("The year "+year+" is a leap year!");
}
else{
    console.log("The year "+year+" is leap not a leap year!");
}



 





