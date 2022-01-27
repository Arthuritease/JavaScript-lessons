const prompt = require("prompt-sync")();
// const PROMPT can be anything but;
// it will become parseInt(anything("Pls choose a number: "));
let userInput = parseInt(prompt("Pls choose a number: "));
if (userInput % 2 === 0) {
  console.log("EVEN");
} else {
  console.log("WEIRDO");
}
