//objects store key/value pairs, like Dictionary in Python
//we associate a key with a value
let food = {
  r: "ramen",
  c: "chips",
  m: "McDonald's",
};

//a pair of key/value is --> property
///we refer to property name and values

console.log(food["r"]);

//refer to propery using dot notation
//bear in mind that 'key' in this case is NOT a string
//to use this, property name must be valid variable name in JS
//only way to call an invalid property name is with []
console.log(food.m);
let student = {
  "first name": "Arthur",
  "last name": "Koh",
};
console.log(student["first name"]);

//unlike Python, JS object can store functions
let Enterprise = {
  speed: 18,
  calculatedistance: function (time) {
    console.log("Calculating distance travelled..");
    return this.speed * time ** 1.5;
  },
};
let destroyer = {
  speed: 50,
  calculatedistance: function (time) {
    console.log("Calculating distance travelled..");
    return this.speed * time ** 1.5;
  },
};
console.log(Enterprise.calculatedistance(10));
console.log(destroyer.calculatedistance(10));
