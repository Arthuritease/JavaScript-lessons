// for (let x = 1; x <= 100; x++) {
//   let word = "STOP HURTIN MY BRAIN";
//   if (x % 15 == 0) {
//     word = "FizzBuzz";
//   } else if (x % 5 == 0) {
//     word = "Fizz";
//   } else if (x % 3 == 0) {
//     word = "Buzz";
//   }
//   console.log(`${x} ${word}`);
// }

for (let x = 1; x <= 100; x++) {
  if (x % 15 == 0) {
    console.log("FizzBuzz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
  } else console.log(x);
}
