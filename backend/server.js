import express from "express";

import dotenv from "dotenv";
import connectDb from "./config/db.js";
import productRoute from "./routes/productRoute.js";
const app = express();
dotenv.config();
const port = process.env.PORT;
connectDb();

app.get("/", (req, res) => {
  res.send("api is running");
});
app.use("/api/products", productRoute);

app.listen(port, () => console.log(`server is running on Port ${port}`));
