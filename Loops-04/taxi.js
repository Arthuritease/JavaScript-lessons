// let distance = 0;

// let fare = 3.5;
// while (fare <= 35) {
//   fare += 7;
//   distance += 1;
// }
// console.log(distance);

let totalAmountLeft = 35;
let distanceTravelled = 0;

while (totalAmountLeft >= 3.5) {
  if (distanceTravelled < 10) {
    distanceTravelled += 0.5;
  } else {
    distanceTravelled += 0.4;
  }
  totalAmountLeft = totalAmountLeft - 3.5;
}
console.log("distance travelled =", distanceTravelled);
