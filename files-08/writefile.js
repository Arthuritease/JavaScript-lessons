const fs = require("fs");

//writeFileSync takes 2 parameters
//1. - name of file
//2. - string to write
//will override string with .txt of the same name

fs.writeFileSync("output.txt", "The quick brown fox jumps over the lazy dog");
