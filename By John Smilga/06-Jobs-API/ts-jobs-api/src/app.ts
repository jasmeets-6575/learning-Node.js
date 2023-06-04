import * as dotenv from "dotenv";
import express from "express";
import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import { json } from "body-parser";
dotenv.config();
const app = express();

// middleware
app.use(json());

// routes
app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    app.listen(port, () => console.log(`Server is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
