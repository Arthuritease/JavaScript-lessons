const prompt = require("prompt-sync")();
//ask user to input either 'y' or 'n'
let ans = prompt("Do you wanna continue? y/n ");

while (ans != "y" && ans != "n") {
  console.log("please enter your answer in y/n");
  ans = prompt("Do you wanna continue? y/n ");
}
console.log("You have entered", ans);
