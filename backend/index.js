import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import Product from "./models/productModel.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(productRoutes);

try {
  await db.authenticate();
  console.info("database connected...");
} catch (error) {
  console.info(error.message);
}

try {
  await Product.sync();
  console.info("table created ...");
} catch (error) {
  console.info(error.message);
}

app.listen(5000, () => {
  console.info("server up and running ...");
});
