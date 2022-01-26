const prompt = require("prompt-sync")();

let psi = parseFloat(prompt("Please enter the psi: "));
let quality = 0;
if (psi <= 150) {
  quality = "Healthy";
} else if (psi <= 300) {
  quality = "Unhealthy";
} else {
  quality = "Hazardous";
}
console.log(quality);
