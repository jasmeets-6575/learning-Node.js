import express from "express";
const app = express();
import { json } from "body-parser";
import tasks from "./routes/tasks";
import { connectDB } from "./db/connect";
import * as dotenv from "dotenv";
import path from "path";
import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handle";
dotenv.config();

// middleware
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));
app.use(json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port: string | number = process.env.PORT || 3001;

const mongoURI: string | undefined = process.env.MONGO_URI;
const start = async () => {
  try {
    if (mongoURI) {
      await connectDB(mongoURI!);
      app.listen(port, (): void =>
        console.log(`server is listening on ${port}...`)
      );
    }
  } catch (error) {
    console.log(error);
  }
};

start();
