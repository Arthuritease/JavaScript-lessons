let fruits = []; //empty array
let numbers = new Array(); //empty array too

let food = ["chicken rice", "laksa", "ramen", "Hokkien mee"];
console.log("food at index 2 is =", food[2]);
food[0] = "fried chicken"; // you can reassign by index
console.log(food);
food = "now i am no longer an array"; //can reassign to str
console.log(food);
food = ["still", "can", "be", "array"]; //or to another array
console.log(food);

let complex = [1, 2, 3, ["A", "B", ["Alpha", "Beta"], "C"]];
console.log(complex[3][2][0]);
// arrays are reference value
let b1 = ["A", "B", "C", "D"];
b2 = b1;
b1[0] = -99;
console.log("b2=", b2);
// let b2 = b1.slice() --> this creates a copy of b1's array, and assign it to b2. Unlike b1=b2.
