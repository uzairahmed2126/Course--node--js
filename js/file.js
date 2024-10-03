const fs = require("fs");
const os =  require('os');
console.log(os.cpus().length)
// fs.writeFileSync("./test.txt", "Hello World sync"); //this will create file and wirte the message

// write file Async is not return any value
// fs.writeFile("./test.txt", "John Bane ga don",()=>{});

// read file
// fs.readFile("./test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// }); //this will create file and wirte the message

// fs.appendFileSync("./test.txt", "hey\n");

// copy
// fs.cpSync("./test.txt", "./copy.txt"); //it will copy and create a new file

// blocking
// console.log('1');
// fs.writeFileSync('test.txt','hello')
// const result = fs.readFileSync('test.txt','utf-8');
// console.log(result);
// console.log('2')

// non blocking
// because the non blocking is not stop it will execute everything
console.log("1"); // first it will print
fs.writeFile("test.txt", "world", (err) => {});
fs.readFile("test.txt", "utf-8", (err, result) => {
  if (err) throw err;
  else console.log(result);
});
console.log("2"); //second it will print
