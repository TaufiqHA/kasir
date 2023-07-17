import express from "express";
import {
  get,
  getById,
  create,
  update,
  destroy,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/product", get);
router.get("/product/:id", getById);
router.post("/product", create);
router.patch("/product/:id", update);
router.delete("/product/:id", destroy);

export default router;
