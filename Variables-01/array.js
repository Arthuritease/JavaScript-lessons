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
