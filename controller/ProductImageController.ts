import ProductImage from "../models/ProductImage";
import expressAsyncHandler from "express-async-handler";

// @desc GET all products images
// @route GET /product-image
// @access Private
const getProductImages = expressAsyncHandler(async (req, res) => {
  const page = req.query.page as string;
  const products = await ProductImage.find()
    .limit(parseInt(page) * 10)
    .lean();
  console.log(req.query);

  if (!products.length) {
    res.status(400).json({ message: "No products was found" });
    return;
  }

  res.json(products);
});

// @desc POST add product image based on previously added product._id
// @route POST /product
// @access Private
const addProductImages = expressAsyncHandler(async (req, res) => {
  const { arr_picture } = req.body;

  // const arr = arr_picture.map((value: any) => {
  //   return {productID: value.productID, productImage: value.productImage.data}
  // })

  // console.log(arr)

  const add = await ProductImage.insertMany(arr_picture);

  if (add) {
    res.status(201).json({ message: `Image upload successfully` });
  } else {
    res.status(400).json({ message: "Invalid product data received" });
  }
});

// @desc PATCH edit product
// @route PATCH /product
// @access Private
const editProductImages = expressAsyncHandler(async (req, res) => {
  // const { id, name, price } = req.body;
  //
  // if (!id || !name || !price) {
  //   res.status(400).json({ message: "All fields are required" });
  //   return;
  // }
  //
  // const product = await ProductImage.findById(id).exec();
  //
  // if (!product) {
  //   res.status(400).json({ message: "Product not found" });
  //   return;
  // }
  //
  // const duplicate = await ProductImage.findOne({ productName: name }).lean().exec();
  //
  // // Allow updates to the original user
  // if (duplicate && duplicate?._id.toString() !== id) {
  //   res.status(409).json({ message: "Duplicate product name" });
  //   return;
  // }
  //
  // product.productName = name;
  // product.price = price;
  //
  // const update = await product.save();
  // res.json({ message: `${name} updated` });
});

// @desc DELETE product
// @route DELETE /product
// @access Private
const deleteProductImages = expressAsyncHandler(async (req, res) => {
  // const { id } = req.body;
  //
  // if (!id) {
  //   res.status(400).json({ message: "All field are required" });
  //   return;
  // }
  //
  // const product = await Product.findById(id).exec();
  //
  // if (!product) {
  //   res.status(400).json({ message: "Product not found" });
  //   return;
  // }
  //
  // const deletion = await product.deleteOne();
  // res.json({ message: `${product.productName} was deleted` });
});

export {
  getProductImages,
  addProductImages,
  editProductImages,
  deleteProductImages
};
