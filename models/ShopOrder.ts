import mongoose, { SchemaTypes } from "mongoose"

const shopOrderSchema = new mongoose.Schema({
  userID: {
    type: SchemaTypes.ObjectId,
    ref: "User",
    required: true
  },
  address: {
    type: String,
    required: true
  },
  orderTotal: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
  },
  receiveDate: {
    type: Date,
  },
  paymentMethod: {
    type: SchemaTypes.ObjectId,
    ref: "PaymentMethod",
    required: true
  },
  shippingMethod: {
    type: SchemaTypes.ObjectId,
    ref: "ShippingMethod",
    required: true
  },
  orderStatus: {
    type: SchemaTypes.ObjectId,
    ref: "OrderStatus",
    required: true
  }
})

export default mongoose.model("ShopOrder", shopOrderSchema)