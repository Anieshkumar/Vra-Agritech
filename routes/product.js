import express from "express";
import {
  Get_Items_Details,
  GetProductList,
  Create_Product
} from "../handlers/product_DB_Handlers.js";

const Product = express.Router();
Product.get("/:id", Get_Items_Details);
Product.get("/", GetProductList);
Product.post("/", Create_Product);

export default Product;