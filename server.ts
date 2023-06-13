import express from "express";
import process from "process";
import path from "path";
import { router } from "./routes/root";
import errorHandler from "./middleware/error/errorHandling";
import { reqLog } from "./middleware/error/reqLog";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOption"
import 'dotenv/config'

import mongoose from "mongoose"
import userSchema from "./models/User"
import productSchema from "./models/Product"
import categorySchema from "./models/Category"

mongoose.connect(process.env.DATABASE_URI!)

const app = express();
const PORT = process.env.PORT || 8000;

app.use(reqLog);

app.use(express.json());

app.use(cors(corsOptions))

app.use(cookieParser())

run()
async function run() {
  // const user = await userSchema.create({username: "user", password: "password", active: true})
  // user.username = "admin"
  // await user.save()
  // console.log(user)

  const user = await userSchema.create({email: "USER@example.com", password: "password", username: "username"})
  console.log(user)

  // try {
  //   const category = await categorySchema.create({category_name: "phone"})
  //   console.log(category)
  //   const product = await productSchema.create({productName: "111111111111111", category_id: category.id, price: "123"})
  //   console.log(product)
  // } catch (err: any) {
  //   console.log(err.message)
  // }
}

app.use("/", express.static(path.join(__dirname, "..", "public")));

app.use("/", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
