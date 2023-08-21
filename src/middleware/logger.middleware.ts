import { Request, Response, NextFunction } from "express";
import logger from "../config/logger.config";

export function log(req: Request, res: Response, next: NextFunction) {
  logger.info(`${req.method.toLocaleUpperCase()} ${req.originalUrl}`);
  next();
}
