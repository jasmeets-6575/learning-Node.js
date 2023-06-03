import { RequestHandler } from "express";
import Product from "../models/product";

export const getAllProductsStatic: RequestHandler = async (req, res) => {
  const products = await Product.find({
    featured: true,
  });
  res.status(200).json({ nbHits: products.length, products });
};

export const getAllProducts: RequestHandler = async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({ nbHits: products.length, products });
};
