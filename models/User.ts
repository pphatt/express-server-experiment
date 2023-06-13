import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    firstName: { type: String, minLength: 10, maxLength: 100 },
    lastName: { type: String, minLength: 10, maxLength: 100 },
    address: { type: String, maxLength: 100 },
    phoneNumber: { type: String, maxLength: 15 },
    roles: [
      {
        type: String,
        default: "Employee",
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
