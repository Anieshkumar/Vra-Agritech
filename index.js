import express from "express";
import Bp from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import Product from "./routes/product.js";
import Store from "./routes/stores.js";

const Vra = express();

Vra.use(Bp.json({ limit: "30mb", extended: true }));
Vra.use(Bp.urlencoded({ limit: "30mb", extended: true }));
Vra.use(cors());
Vra.use("/product", Product);
Vra.use("/stores", Store);


const CONNECTIO_URL =
  "mongodb+srv://Party_Admin:ACpyIzR8xzVUoRXK@cluster0.tyrbq.mongodb.net/Party_DB?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5001;

mongoose
  .connect(CONNECTIO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    Vra.listen(PORT, () => console.log(`server running on ${PORT}`))
  )
  .catch((error) => console.log(error.message));