import mongoose from "mongoose";

const Product_schema = mongoose.Schema({

  product_image: String,
  product_name:String,
  product_price: Number,
  product_description:String,
  product_status:Boolean
});

const Products = mongoose.model("Products", Product_schema);

export default Products;