import express from "express";
import process from "process";
import path from "path";
import { router } from "./routes/root";
import {productRouter} from "./routes/product"
import errorHandler from "./middleware/error/errorHandling";
import { reqLog } from "./middleware/error/reqLog";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOption";
import "dotenv/config";
import { connectDB } from "./config/dbConnection"
import mongoose from "mongoose";
import { handleLog } from "./middleware/error/handleLog";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB()

app.use(reqLog);

app.use(express.json({limit: '50mb'}));

app.use(cors(corsOptions));

app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "..", "public")));

app.use("/", router);

app.use("/products", productRouter)

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB")

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})

mongoose.connection.on("error", (err: any) => {
  console.log(err)
  handleLog(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
