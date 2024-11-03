// Build in fs module to create a file

import fs from "fs";

const data: string = "Hello World!";
fs.writeFileSync("example.txt", data);
console.log("File created successfully");
