import * as dotenv from "dotenv";
import express from "express";
import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import { json } from "body-parser";
import authRouter from "./routes/auth"
import jobsRouter from "./routes/jobs"
import { connectDB } from "./db/connect";

dotenv.config();
const app = express();


// middleware
app.use(json());

// routes
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/jobs",jobsRouter)

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const mongoURI:string | undefined = process.env.MONGO_URI

const start = async () => {
  try {
   if(mongoURI){
    await connectDB(mongoURI)
    app.listen(port, () => console.log(`Server is listening port ${port}`));
   }
    // connectDB
  } catch (error) {
    console.log(error);
  }
};

start();
