import { handleLog } from "./handleLog";
import { Request, Response, NextFunction } from "express";

type RequestLogType = (req: Request, res: Response, next: NextFunction) => any;

export const reqLog: RequestLogType = (req, res, next) => {
  handleLog(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log");
  next();
};
