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
  const { featured } = req.query;
  const queryObject:queryParameter = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  const products = await Product.find(queryObject);
  res.status(200).json({ nbHits: products.length, products });
};
