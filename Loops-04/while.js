// while(an expression){
//code that i want to repeat

//
// we wanna print 10 "gong xi fa cai" to console

//1. we need sentinel variable -controls the loop (whether to keep running or not)
let counter = 0;

//2. begin the while loop
//figure out the expression that will evaluate to true
//if we want to continue one interation in the loop
while (counter < 10) {
  // counter = sentinent variable, 10 = loop variable
  console.log("恭喜发财");
  counter += 1;
}
console.log("没了");
// if Sam saves $10 everyday, and he saves $1 more per day
//how many days will it take for him to save $200
let days = 1;
let totalSaved = 0;
let howMuchToSave = 10;

while (totalSaved < 100) {
  totalSaved += howMuchToSave;
  howMuchToSave += 1;
  days += 1;
}

console.log("How many days to save 100 =", days);
