const express = require("express");

const server = express();

server.listen(8080);
console.log("Hello how are you");

// const lib = require("./lib.js");
// const fs = require("fs");

// const t1 = performance.now();
// // const txt = fs.readFileSync("demo.txt", "utf-8");
// // console.log(txt);
// fs.readFile("demo.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });

// console.log(lib.sum(6, 6), lib.diff(5, 9));

// console.log("Hello");

// const t2 = performance.now();

// console.log(t2 - t1);
