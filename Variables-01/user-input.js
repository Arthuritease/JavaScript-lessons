//input is NOT the way to ask for user input in JS
//in terminal:
//$ yarn add prompt-sync
//either once per new directory
//or do it in /workspace directory
// import in prompt sync into our program
const prompt = require("prompt-sync")();
let s = prompt("what's your name> ");
console.log("hi", s);