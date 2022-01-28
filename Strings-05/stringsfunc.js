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
