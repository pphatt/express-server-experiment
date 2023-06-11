import express from "express";
import process from "process";
import path from "path";
import { router } from "./routes/root";
import errorHandler from "./middleware/error/errorHandling";
import { reqLog } from "./middleware/error/reqLog";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOption"
import corsOption from "./config/corsOption"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(reqLog);

app.use(express.json());

app.use(cors(corsOption))

app.use(cookieParser())

app.use("/", express.static(path.join(__dirname, "..", "public")));

app.use("/", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
