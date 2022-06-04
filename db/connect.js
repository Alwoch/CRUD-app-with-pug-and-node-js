const mongoose = require("mongoose");
const logger = require("../logger/logger")

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("mongoDB connection established.....");
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
