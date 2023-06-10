import express from "express";
import process from "process";
import path from "path";
import { router } from "./routes/root";

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/", express.static(path.join(__dirname, "../", "public")));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
