import mongoose from "mongoose"

const paymentMethodSchema = new mongoose.Schema({
  paymentMethodsName: {
    type: String,
    minLength: 5,
    maxLength: 255,
    required: true
  }
})

export default mongoose.model("PaymentMethod", paymentMethodSchema)