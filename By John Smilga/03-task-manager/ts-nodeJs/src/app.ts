import express from "express";
const app = express();
import { json } from "body-parser";
import tasks from "./routes/tasks";
import { connectDB } from "./db/connect";
import * as dotenv from "dotenv";
dotenv.config();

// middleware
app.use(json());

app.use("/api/v1/tasks", tasks);

const port: number = 3000;

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
