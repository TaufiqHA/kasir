import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import userRoute from "./routes/userRoute.js";
// import User from "./models/userModel.js";
// import Product from "./models/productModel.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(productRoutes);
app.use(userRoute);

// try {
//   await db.authenticate();
//   console.info("database connected...");
// } catch (error) {
//   console.info(error.message);
// }

// try {
//   Product.sync();
// } catch (error) {
//   console.info(error.message);
// }

app.listen(5000, () => {
  console.info("server up and running ...");
});
