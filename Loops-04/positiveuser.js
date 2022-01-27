//we want the user to enter a pos number
//ask the user again if not pos, and repeat until user input pos
const prompt = require("prompt-sync")();

let number = 0;
while (true) {
  number = parseInt(prompt("Enter a pos number: "));
  if (number > 0) {
    break;
  }
}
