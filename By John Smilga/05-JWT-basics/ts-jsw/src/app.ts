import * as dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import path from "path";
import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import { json } from "body-parser";
import mainRouter from "./routes/main";

dotenv.config();
const app = express();

// middleware
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));
app.use(express.static("./"));
app.use(json());

app.use("/api/v1", mainRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
