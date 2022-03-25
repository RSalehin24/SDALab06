require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const questionRoutes = require("./routes/question.routes");
const indexRoutes = require("./routes/index.routes");

mongoose
  .connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((error) => {
    console.log(error);
  });


app.use(bodyParser.json());
app.use(questionRoutes);
app.use(indexRoutes);


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`App is running at port: ${PORT}`);
});