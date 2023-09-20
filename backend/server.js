import express from "express";
import products from "./data/Products.js";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/products", (req, res) => {
  res.send(products);
}); 

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(port, () => console.log(`server is running on Port ${port}`));
