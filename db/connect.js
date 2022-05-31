const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connection established.....");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
