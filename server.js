const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://adminprabha:Atlas%40123@aws.dwzni.mongodb.net/HMISDB?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,    
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
 mongoose.connection.on("error", console.error.bind(console, "connection error: "));
 mongoose.connection.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

//mongodb://localhost:27017/atlasTest