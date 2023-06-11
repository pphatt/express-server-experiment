import { handleLog } from "./handleLog"
import {Request, Response, NextFunction} from "express";

interface ILogger {
  req: Request;
  res: Response;
  next: NextFunction;
}

export const reqLog = (req: Request, res: Response, next: NextFunction) => {
  handleLog(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
  next()
};
