import mongoose from "mongoose"

const shippingMethodSchema = new mongoose.Schema({
  shippingMethodName: {
    type: String,
    minLength: 5,
    maxLength: 255,
    required: true
  }
})

export default mongoose.model("ShippingMethod", shippingMethodSchema)