// This file is dedicated to configure winston logger

import { createLogger, transports, format } from "winston";

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "user.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "userError.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

export default logger;
