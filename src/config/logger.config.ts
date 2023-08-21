import * as winston from "winston";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.printf(
      (log) =>
        `${log.level.toLocaleUpperCase()}: ${new Date().toLocaleString(
          "en-US"
        )} - ${log.message}`
    ),
    winston.format.colorize({ all: true })
  ),
  transports: [],
});

logger.add(new winston.transports.Console());

export default logger;
