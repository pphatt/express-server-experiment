import { handleLog } from "./handleLog";
import { Request, Response, NextFunction } from "express";

type ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => any;

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  handleLog(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
  console.log(err.stack)

  const status = res.statusCode ? res.statusCode : 500; // server error

  res.status(status);

  res.json({ message: err.message });
};

export default errorHandler;
