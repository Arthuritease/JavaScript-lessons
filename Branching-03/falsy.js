console.log('"" == false', "" == false);
console.log("[] == false", [] == false);
console.log("0 == false", 0 == false);
console.log("undefined == false", undefined == false);
console.log("null == false", null == false);

if (undefined) {
  console.log("undefined");
}

if (null) {
  console.log(null);
}

if (NaN) {
  console.log("Not a number detected");
}
// undefined is TRUE unless it's wrapped in IF argument
// same as
