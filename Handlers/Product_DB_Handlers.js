import Products from "../DB_Model/product_DB.js";
import mongoose from "mongoose";
import express from "express";

export const Get_Items_Details = async (req, res) => {
  const { id } = req.params;
  try {
    const Item_details = await Products.findById(id);

    res.status(200).json(Item_details);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const GetProductList = async (req, res) => {
  try {
    const Product_list = await Products.find();

    res.status(200).json(Product_list);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const Create_Product = async (req, res) => {
  const Request_Product = req.body;
  const Add_Product = new Products(Request_Product);
  try {
    await Add_Product.save();
    res.status(201).json(Add_Product);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};