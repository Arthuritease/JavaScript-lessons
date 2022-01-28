function foobar(x) {
  return x * 2;
}
//arrow functions
//1. all arrow functions are annonymous
let f = (x) => {
  return x * 2;
};
//below works only if you have ONE and exactly ONE parameter
//if so, the () are optional
let g = (x) => {
  return x * 2;
};
//if function body only has one line and said line is RETURN;
//you can even omit {}
let k = (x) => x * 2;
//why use it? shorthand and convenient
let num = [10, 11, 1, 2, 21, 24];
num.sort(function (a, b) {
  return a - b;
});
num.sort((a, b) => b - a);
console.log(num);
