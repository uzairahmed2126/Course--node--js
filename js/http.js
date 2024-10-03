const fs = require("fs");
const http = require("http");
const port = 3009;
// let a = http.createServer((req, res) => {
//   const date = new Date();
//   const log = `Day is : ${date.getFullYear()} time is : ${date.toTimeString()} new req rec.${
//     req.url
//   }\n`;
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (req.url) {
//       case "/":
//         res.end("Home page");
//         break;
//       case "/contact":
//         res.end("contact page");
//         break;
//       case "/about":
//         res.end("about page");
//         break;
//       default:
//         res.end("404 not found");
//     }
//   });
// });
// a.listen(port, () => {
//   console.log("server is start and port number is " + port);
// });

let myServer = http.createServer((req,res)=>{
  function response(value) {
    return res.end(value);
  }
  switch(req.url) {
    case '/':response('Home Page');
    break;
    case '/about':response('About Page');
    break;
    case '/contact':response('Contact page');
    break;
    default :response('404 NOT FOUND');
  }
})
myServer.listen(port,()=>{
  console.log('server is start and port number is : ',port);
})