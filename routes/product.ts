import express from "express";
import {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
} from "../controller/ProductController";

const productRouter = express.Router();

productRouter
  .route("/")
  .get(getProducts)
  .post(addProduct)
  .patch(editProduct)
  .delete(deleteProduct);

export { productRouter };
