import Product from "../models/Product";
import expressAsyncHandler from "express-async-handler";

// @desc GET all products
// @route GET /product
// @access Private
const getProducts = expressAsyncHandler(async (req, res) => {
  const page = req.query.page as string
  const products = await Product.find().limit(parseInt(page) * 10).lean();
  console.log(req.query)

  if (!products.length) {
    res.status(400).json({ message: "No products was found" });
    return;
  }

  res.json(products);
});

// @desc POST add product
// @route POST /product
// @access Private
const addProduct = expressAsyncHandler(async (req, res) => {
  const { name, price, manufacturer, scale, image } = req.body;

  if (!name || !price || !manufacturer || !scale || !image) {
    res.status(404).json({ message: "All fields are required"})
    return
  }

  const product = await Product.findOne({ productName: name }).lean().exec();

  if (product?.productName === name) {
    res.status(400).json({ message: "Product already exists"})
    return
  }

  const add = await Product.create({ productName: name, price, image, manufacturer, scale });

  if (add) {
    res.status(201).json({ message: `New product ${name} was added`, _id: add._id });
  } else {
    res.status(400).json({ message: "Invalid product data received" });
  }
});

// @desc PATCH edit product
// @route PATCH /product
// @access Private
const editProduct = expressAsyncHandler(async (req, res) => {
  const { id, name, price } = req.body;

  if (!id || !name || !price) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  const product = await Product.findById(id).exec();

  if (!product) {
    res.status(400).json({ message: "Product not found" });
    return;
  }

  const duplicate = await Product.findOne({ productName: name }).lean().exec();

  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    res.status(409).json({ message: "Duplicate product name" });
    return;
  }

  product.productName = name;
  product.price = price;

  const update = await product.save();
  res.json({ message: `${name} updated` });
});

// @desc DELETE product
// @route DELETE /product
// @access Private
const deleteProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    res.status(400).json({ message: "All field are required" });
    return;
  }

  const product = await Product.findById(id).exec();

  if (!product) {
    res.status(400).json({ message: "Product not found" });
    return;
  }

  const deletion = await product.deleteOne();
  res.json({ message: `${product.productName} was deleted` });
});

export { getProducts, addProduct, editProduct, deleteProduct };
