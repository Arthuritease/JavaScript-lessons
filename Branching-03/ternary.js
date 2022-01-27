const input = require("prompt-sync")();

// unary - operator that works with one clause
let x = 3;
x++;
// console.log(x++); // => +1 to x
console.log("x after x++ =", x);

//ternary operator using EVEN / ODD as example
let number = parseInt(input("enter number: "));
number % 2 === 0 ? console.log("Even") : console.log("Weirdo");
// another way to write it
console.log(number % 2 == 0 ? "Even" : "Weirdo");
