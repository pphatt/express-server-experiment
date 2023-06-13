import mongoose, { Schema } from "mongoose"

const shopOrderSchema = new mongoose.Schema({
  userID: {
    type: Schema.Types.ObjectId,
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
    type: Schema.Types.ObjectId,
    ref: "PaymentMethod",
    required: true
  },
  shippingMethod: {
    type: Schema.Types.ObjectId,
    ref: "ShippingMethod",
    required: true
  },
  orderStatus: {
    type: Schema.Types.ObjectId,
    ref: "OrderStatus",
    required: true
  }
})

export default mongoose.model("ShopOrder", shopOrderSchema)