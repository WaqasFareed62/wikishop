import express from "express";

import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";
const route = express.Router();

route.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

route.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.send(product);
    }
    res.status(404).json({ message: "Product not found" });
  })
);

export default route;
