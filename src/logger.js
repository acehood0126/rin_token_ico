import loglevel from "loglevel";

const logger = {
  warn: loglevel.warn,
  debug: loglevel.debug,
  info: loglevel.info,
  error: loglevel.error,
  trace: loglevel.trace,
  setLevel: loglevel.setLevel,
};

export default logger;
