//objects store key/value pairs, like Dictionary in Python
//we associate a key with a value
let food = {
  r: "ramen",
  c: "chips",
  m: "McDonald's",
  k: "KFC",
  b: "bak kwa",
};

// how do we know a property exist in an object?
console.log("a in food?-->", "a" in food);
console.log("b in food?-->", "b" in food);

//a pair of key/value is --> property
///we refer to property name and values

console.log(food["r"]);

//refer to propery using dot notation
//bear in mind that 'key' in this case is NOT a string
//to use this, property name must be valid variable name in JS
//only way to call an invalid property name is with []
console.log(food.m);
let student = {
  firstname: "Arthur",
  lastname: "Koh",
};
console.log(student.firstname, "", student.lastname);

//unlike Python, JS object can store functions
//a function in onjects are known as "Methods:"
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

//possible to create an empty onject
let employeeRecord = {
  firstname: "Tan",
};
//you can add a new property into the object
employeeRecord.lastname = "Ah Kow";
employeeRecord.getname = function () {
  return this.firstname + " " + this.lastname;
};

console.log("Dude's name is -->", employeeRecord.getname());

// how do we know a property exist in an object?
