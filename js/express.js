const express = require("express");
const app = express();
const port = 8002;
app.get("/", (req, res) => {
  return res.send("<h1>this is home page</h1>");
});
app.get("/about", (req, res) => {
  return res.send("this is about page");
});
app.get("/contact", (req, res) => {
  return res.send("This is contact page");
});

app.listen(port, () => {
  console.log("server is start and port number is  : ", port);
});
