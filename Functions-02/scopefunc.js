function foobar(x) {
  x = x * 2;
  return x;
}
let x = 100;
x = foobar(x); //this will make it work and generate 200
foobar(x);
console.log(x);
