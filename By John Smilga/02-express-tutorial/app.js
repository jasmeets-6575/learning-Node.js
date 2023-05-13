const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use([logger, authorize]);
app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About Page</h1>`);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000..");
});
