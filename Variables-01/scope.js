// in JavaScript, {...} mforms a scope
const prompt = require("prompt-sync")();
let age = parseInt(prompt("Please enter your age: "));
if (age < 67) {
  console.log("you're age", age, "y.o");
  console.log("you cannot retire yet");
  console.log("Government still want your cpf");
}
