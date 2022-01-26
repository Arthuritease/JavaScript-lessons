const prompt = require("prompt-sync")();

// an optional argument has a default value
// if gstpercentage is not given a value, then it defaults to 0.07

function calculateWithGST(bill, gstpercentage = 0.07) {
  let gst = bill * gstpercentage;
  let total = bill + gst;
  return total;
}
let bill = parseFloat(prompt("Enter bill amount: "));
// let total = calculateWithGST(bill, 0.07);
let total = calculateWithGST(bill);
let totalInSydney = calculateWithGST(bill, 0.1);
let totalInPinoy = calculateWithGST(bill, (gstPercentage = 0.12));
console.log("Your total is = ", total);
console.log("Your total in Sydney is = ", totalInSydney);
console.log("Your total in Pinoy land is = ", totalInPinoy);
