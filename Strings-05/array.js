// indexing, slicing in array are same as strings
// functions like slice and includes exists in arrays
// ARRAYS ARE NOT IMMUTABLE
let food = ["chicken rice", "soya bean", "muffin"];
food[0] = "duck rice"; // can change item of an array via index
console.log("After food[0]='duck rice'", food);

// important functions for array
food.push("roasted chicken wings");
console.log(`food.push("roasted chicken wings")`, food);

// pop is to remove from the end of the array
food.pop();
console.log("food.pop()", food);

food.reverse();
console.log("food.reverse()", food);
