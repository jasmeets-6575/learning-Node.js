import express from "express";
const app = express();
import { json } from "body-parser";
import tasks from "./routes/tasks";
import { connectDB } from "./db/connect";
import * as dotenv from "dotenv";
dotenv.config();

// middleware
app.use(json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);
app.use("/api/v1/tasks/:id", tasks);

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
