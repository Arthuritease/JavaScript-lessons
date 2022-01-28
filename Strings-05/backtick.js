// why the backtick strings are special
// 1. they can have line and spacings
let letter = `Dear Sir,
your bill of $4546786 is due soon. Please pay ah.

Regards,
 Loan Shark lol`;
console.log(letter);

//2. you can easily sub variables into it
let first = "Jane";
let second = "John";
let bill = 10000;
let form = `
Dear ${first} ${second}
    
    faster pay your bill.
    Otherwise, We'd set a bag of poop on fire by your porch eh heh heh
    Your bill totals at ${bill} and you have to pay a minimum of ${bill * 0.75}
    
    Good luck ah`;

console.log(form);
