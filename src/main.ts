import "dotenv/config";
import "reflect-metadata";
import * as express from "express";
import cors from "cors";
import helmet from "helmet";
import { Request, Response, NextFunction } from "express";
import { InversifyExpressServer, getRouteInfo } from "inversify-express-utils";
import * as prettyjson from "prettyjson";
import container from "./config/dependency-injection.config";
import { log } from "./middleware/logger.middleware";
import logger from "./config/logger.config";

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(cors());
  app.use(helmet());

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Logging with Winston
  app.use((req: Request, res: Response, next: NextFunction) =>
    log(req, res, next)
  );
});

const app = server.build();

const routeInfo = getRouteInfo(container);

// Start the server
const port = 3002;
app.listen(port, () => {
  logger.warn(`Listening on port: ${port}`);
  logger.info(prettyjson.render({ routes: routeInfo }));
});
