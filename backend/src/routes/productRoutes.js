import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/productControllers"

const productRoutes = express.Router()

productRoutes.post("/", createProduct)
productRoutes.get("/", getAllProducts)
productRoutes.get("/:id", getProduct)
productRoutes.put("/:id", updateProduct)
productRoutes.delete("/:id", deleteProduct)

export default productRoutes