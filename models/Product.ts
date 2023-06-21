import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 100,
    },
    image: {
      // data: Buffer,
      // contentType: String
      type: Buffer,
    },
    // category_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Category",
    //   required: true
    // },
    description: {
      type: String,
      maxLength: 255,
    },
    price: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
