import mongoose from "mongoose"

/*
* TODO:
*  - Think about making a discount plan for product
*
* */

const promotionSchema = new mongoose.Schema({
  promotionName: {
    type: String,
    minLength: 10,
    maxLength: 255,
    required: true
  },
  promotionDescription: {
    type: String,
    minLength: 20,
    maxLength: 280,
    required: true
  },
  promotionDiscountRate: {
    type: Number,
  }
})

export default mongoose.model("Promotion", promotionSchema)