import mongoose, {SchemaTypes} from "mongoose"

const productImageSchema = new mongoose.Schema({
  productID: {
    type: SchemaTypes.ObjectId,
    ref: "Product",
    required: true
  },
  productImage: {
    type: Blob,
    required: true
  }
})

export default mongoose.model('ProductImage', productImageSchema)