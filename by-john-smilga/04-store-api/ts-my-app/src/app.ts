import * as dotenv from "dotenv";
import express from "express";
import "express-async-errors"

dotenv.config();
const app = express();

import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import { json } from "body-parser";
import { connectDB } from "./db/connect";
import productsRouter from "./routes/products";


// middleware
app.use(json());

//routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">products route</a>`);
});

app.use("/api/v1/products",productsRouter)

// products route 

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

const start = async () => {
  try {
    if (mongoURI) {
      await connectDB(mongoURI);
      app.listen(port, () => console.log(`Server is listening port ${port}`));
    }
  } catch (error) {
    console.log(error);
  }
};

start();
