import express from "express";
import { json } from "body-parser";
const app = express();

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const port: number = 3000;
app.listen(port, (): void => console.log(`server is listening on ${port}...`));
