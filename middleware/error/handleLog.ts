import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import fs from "fs";
import path from "path";

const fsPromises = fs.promises;

const handleLog = async (message: string, logFileName: string) => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logContent = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "../../..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "../../..", "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "../../..", "logs", logFileName),
      logContent
    );
  } catch (err) {
    console.log(err);
  }
};

export { handleLog };
