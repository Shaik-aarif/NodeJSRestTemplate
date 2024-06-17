import logger from "./logger.js";

const logInfo = (message , details) => {
  if (process.env.DISABLE_LOG === true) {
    return;
  } else {
    let log = {
      level: "info",
      message: message,
      details: details,
    };
    logger.log(log);
  }
};

const logError = ( message , details) => {
  if (process.env.DISABLE_LOG === true) {
    return;
  } else {
    let log = {
      level: "error",
      message: message.toString(),
      details: details,
    };
    logger.log(log);
  }
};

export { logInfo, logError };
