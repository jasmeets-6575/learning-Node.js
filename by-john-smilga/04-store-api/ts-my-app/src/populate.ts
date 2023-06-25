import * as dotenv from "dotenv";
import Product from "./models/product";
import productsJson from "./products.json";
import { connectDB } from "./db/connect";
dotenv.config();

const mongoURI = process.env.MONGO_URI;
const start = async () => {
  try {
    if (mongoURI) {
      await connectDB(mongoURI);
      await Product.deleteMany();
      await Product.create(productsJson)
      console.log("Success!!!");
      process.exit(0)
    }
} catch (error) {
    console.log(error);
    process.exit(0)
  }
};

start();
