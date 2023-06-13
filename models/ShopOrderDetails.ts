import mongoose, { SchemaTypes } from "mongoose"

const shopOrderDetailsSchema = new mongoose.Schema({
  shopOrderID: {
    type: SchemaTypes.ObjectId,
    ref: "ShopOrder",
    required: true
  },
  productID: {
    type: SchemaTypes.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    min: 1,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

export default mongoose.model("ShopOrderDetails", shopOrderDetailsSchema)
