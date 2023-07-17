import express from "express";
import {
  get,
  getById,
  create,
  update,
  destroy,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/user", get);
router.get("/user/:id", getById);
router.post("/user", create);
router.patch("/user/:id", update);
router.delete("/user/:id", destroy);

export default router;
