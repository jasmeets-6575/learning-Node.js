import * as dotenv from "dotenv";
import Product from "./models/product";
import * as productsJson from "./products.json";
import { connectDB } from "./db/connect";
dotenv.config();

const mongoURI = process.env.MONGO_URI;

const start = async () => {
  try {
    if (mongoURI) {
      await connectDB(mongoURI);

      console.log("Success!!!");
    }
  } catch (error) {
    console.log(error);
  }
};

start();
