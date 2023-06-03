import { RequestHandler, query } from "express";
import Product from "../models/product";

interface queryParameter {
  name?: string;
  price?: number;
  featured?: boolean;
  rating?: number;
  createdAt?: Date;
  company?: string;
}

export const getAllProductsStatic: RequestHandler = async (req, res) => {
  const products = await Product.find({
    featured: true,
  });
  res.status(200).json({ nbHits: products.length, products });
};

export const getAllProducts: RequestHandler = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject: queryParameter = {};
  //   const regexObj = { $regex: name, $options: "i" };
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (typeof company === "string") {
    queryObject.company = company;
  }
  if (typeof name === "string") {
    queryObject.name = name;
  }

  let result = Product.find(queryObject);
  if (typeof sort === "string") {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};
