import mongoose from "mongoose";

const Store_Locator = mongoose.Schema({
  Store_name: { type: String, required: true },
  lon: { type: String, required: true },
  lat: { type: String, required: true },
  contact_no: { type: Number, required: true },
});
const Store = mongoose.model("Store", Store_Locator);
export default Store;