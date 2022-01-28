//Write a function replaceNthCharacter() that takes in three
// arguments. The first argument is a string, the second argument
// is a single character, and the last argument is an index.
// The function will return a string same as the first argument,
// excpet the character at the specific index is the second argument.
function replaceNthCharacter(x, y, z) {
  x = "Momo";
  y = 3;
  z = "eh";
  array = x.split("");
  array[y] = z;
  a = array.join("");

  console.log(array);
}

replaceNthCharacter();
