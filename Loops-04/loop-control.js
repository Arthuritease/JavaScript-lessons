let n = 0;
while (n < 10) {
  console.log(n);
  if (n >= 5) {
    break; // exit the loop
    // and go to the next line
    // after the loop
  }
  n++;
}
console.log("loop ended");

console.log("continue in for loop example -------------------------------");

for (let s = 10; s < 21; s++) {
  if (s == 12) {
    continue;
  }
  console.log(s);
}
