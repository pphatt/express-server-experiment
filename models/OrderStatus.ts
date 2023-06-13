import mongoose from "mongoose";

const orderStatusSchema = new mongoose.Schema({
  orderStatusName: {
    type: String,
    minLength: 10,
    maxLength: 255,
    required: true
  }
});

export default mongoose.model("OrderStatus", orderStatusSchema);
