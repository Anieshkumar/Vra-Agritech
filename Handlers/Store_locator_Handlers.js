import Store from "../DB_Model/store_locator.js";
import mongoose from "mongoose";
import express from "express";

export const addStore = async (req, res) => {
    const Store_req = req.body;
    const Addstore = new Store(Store_req);
    try {
      await Addstore.save();
      res.status(201).json(Addstore);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

export const displayStores = async (req, res) => {
    try {
      const All_Stores = await Store.find();
  
      res.status(200).json(All_Stores);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

export const StoreDetails = async (req, res) => {
    const { id } = req.params;
    try {
      const store_details = await Store.findById(id);
  
      res.status(200).json(store_details);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };