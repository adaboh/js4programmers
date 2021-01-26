//! CHAPTER 4

// window.alert("Welcome to \t javascript \n dialogs ");

/* let _Myname; 
Myname = window.prompt("Please Enter your name");
document.writeln(`<h1> Welcome to js ${Myname} </h1> `);
console.log(Myname) */

/* let firstNo, secondNo, Number1, Number2, sum;
firstNo = prompt("Enter first Number")
secondNo = prompt("Enter second Number")
sum = parseInt(firstNo) + parseInt(secondNo);
document.writeln(`<h1> The sum is ${sum}</h1>`) */

// Time sensitive greetings
/* let myName;
let now = new Date();
let hour = now.getHours();
console.log(hour);

myName = prompt("Enter your name");

if (hour < 12) {
  document.write(`<h1> Good morning `);
} else if (hour >= 12) {
  //convert hour to 12-hour clock
  hour = hour - 12;
  if (hour < 6) {
    document.write(`<h1> Good Afternoon `);
  } else if (hour >= 6) {
    document.write(`<h1> Good Evening `);
  }
}

document.write(`${myName}, welcome to javascript programming `); */

//* CHAPTER 5 - CONTROL STATEMENTS I

let score = 34;
let grade;
/* if (score >= 80) {
  document.writeln(`The student passed`);
} else {
  document.writeln(`The student failed`);
} */

// if(score > 80){
//   grade = "A"
// } else if (score >=70){
//   grade = "B"
// } else if(grade >=60){
//   grade = "C"
// } else if (grade >=50){
//   grade = "D"
// } else {
//   grade = "F"
// }
// console.log("Grade is ", grade)

//? in conditional Operator or ternary terms
// grade = score >90? "A" : score >=80 ? "B": score > 60? "C": score >= 50? "D": "F"
// console.log("Grade from Ternary ops ", grade)

//! Dangling-else problem
// let x = 4,
//   y = 4;

// if (x > 5) if (y > 5) console.log(" x and y are > 5")
// else console.log("x is <= 5");

// if (x > 5) {
//   if (y > 5) console.log(" x and y are > 5");
// } else console.log("x is <= 5");

//! while repetition statement
let product = 2;
while (product <= 1000) {
  product = 2 * product;
  console.log(product);
}

console.log(product);
