import express from "express";
import { getProduct, postProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

//GET PRODUCT
router.get("/", getProduct)

//POST PRODUCT
router.post("/", postProduct);

// UPDATE PRODUCT
router.put("/:id", updateProduct);

//DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;

