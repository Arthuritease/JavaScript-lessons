let phrase = "The quick brown fox jumps over the lazy dog";
console.log("fourth character = ", phrase[4]);

console.log("Length of phrase = ", phrase.length);

//slicing strings
//e.g to remove 'the', slice it from phrase[3] onwards.
// notice the use of () brackets
console.log("sliced phrase = ", phrase.slice(3));
// start slicing at 6(include)
//end slicing at 12(exclude)
console.log("Defined slicing phrase = ", phrase.slice(6, 12));
// slice w/o arguments will return unedited string

//changing string to upepr case. Lower case same wat with x.toLowerCase()
console.log("Uppercase phrase = ", phrase.toUpperCase());

let w = "12345     ";
console.log("removed white spaces from W ->", w.trim() + "!!");

//includes 'true' if string contains a particular parameter
console.log("our phrase includes 'fox'? ->", phrase.includes("fox"));
console.log(
  "our phrase includes 'meow meow'? ->",
  phrase.includes("meow meow")
);

// finding index of the first occurence of sub string
console.log("index of word'fox' starts at ->", phrase.indexOf("fox"));

//split funcction will break string into array
let lunch = "chicken rice,soya bean milk,siew mai,satay,muffin";
console.log("lunch.split(',') =>", lunch.split(","));
