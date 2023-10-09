import mongoose from "mongoose";
import products from "./data/Products.js";
import users from "./data/users.js";
import User from "./models/userModal.js";
import Product from "./models/productModel.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import orderItem from "./models/orderItem.js";

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await orderItem.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;
    const sampleProduct = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProduct);
    console.log("data inserted successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1); 
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await orderItem.deleteMany();
    console.log("data destroyed successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
