const connectDB = require("./db/connect");
require("dotenv").config();
const students = require("./routes/student");
const express = require('express');
const path = require("path");

const logger = require('./logger/logger')

//express app
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

//view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//routes
app.use("/", students);

//port variable
const port = process.env.PORT || 4000;

//listening for requests
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, logger.info("listening for requests on port 4000"));
};
start();
