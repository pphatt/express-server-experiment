import mongoose, { Schema } from "mongoose"

const productImageSchema = new mongoose.Schema({
  productID: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  productImage: {
    type: Blob,
    required: true
  }
})

export default mongoose.model('ProductImage', productImageSchema)