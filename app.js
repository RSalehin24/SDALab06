require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const QuestionRoutes = require("./routes/question.routes");

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
app.use(QuestionRoutes);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`App is running at port: ${PORT}`);
});