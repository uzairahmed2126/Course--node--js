const math = require("./math.mjs");
const { add, subtrack } = math;
console.log(add(2, 2));
console.log(subtrack(2, 2));

// const sum = require("./add");
// const name = require("./name");
// console.log(`The sum is : ${sum} The name is : ${name}`);
// const superHero = require("./class");
// console.log(superHero.getName());
// superHero.setName("hey");
// console.log(superHero.getName());

// const newSuperHero = require('./class');
// console.log(newSuperHero.getName())
// const http = require("http");
// const data  = require('../data.json')
// const hostName = "127.0.0.1";
// const port = 3000;
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("content-type", "text/green");
//   fs.readFile(data);
//   res.end("Hello World\n");
// });

// server.listen(port, hostName, () => {
//   console.log(`Server running at http://${hostName}:${port}/`);
// });

// const express = require("express");
// const http = require("http");
// const app = express();
// const cors = require("cors");
// const data = require("../data.json");
// const server = http.createServer(app);
// const fs = require("fs");

// const port = process.env.PORT || 3002;
// require("dotenv").config();
// console.log("our json db has this:", data);
// const newData = [
//   {
//     id: 1,
//     name: "uzair",
//     lastName: "ahmed",
//     skill: "frontend developer",
//     address: "jodhpur",
//   },
// ];

// app.get("/products", async (req, res, next) => {
//   console.log("hello from products");
//   fs.writeFile("data.json", JSON.parse(newData), (err) => {
//     if (err) throw err;
//     console.log("done writing...");
//   });
// });
// // fs.readFile('../data.json', (err, data) => {
// //   console.log(data);
// // });

// server.listen(port, () => console.log(`Server Listening ${port}`));
