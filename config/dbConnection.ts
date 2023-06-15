import mongoose from "mongoose";
import process from "process";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
  } catch (err: any) {
    console.log(err.message)
  }
};