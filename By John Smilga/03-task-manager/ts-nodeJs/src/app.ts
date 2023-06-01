import express from "express";
const app = express();
import { json } from "body-parser";
import tasks from "./routes/tasks";
import { connectDB } from "./db/connect";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config();

const publicDirectoryPath = path.join(__dirname, '../public');
// middleware
app.use(express.static(publicDirectoryPath))
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
