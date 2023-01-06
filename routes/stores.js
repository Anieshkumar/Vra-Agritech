import express from "express";
import {
  addStore,
  displayStores,
  StoreDetails
  
} from "../handlers/Store_locator_Handlers.js";


const Store = express.Router();
Store.get("/:id",StoreDetails);
Store.get("/", displayStores);
Store.post("/", addStore);

export default Store;