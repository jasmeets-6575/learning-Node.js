const express = require("express");
const app = express();

const logger = (re, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};
app.get("/", logger, (req, res) => {
  res.send(`<h1>Home Page</h1>`);
});

app.get("/about", logger, (req, res) => {
  res.send(`<h1>About Page</h1>`);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000..");
});
