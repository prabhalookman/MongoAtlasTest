const express = require("express");
const Staff = require("./models");
const app = express();

app.post("/add_Staff", async (request, response) => {
  console.log('I am from staff')
  try {
    let Staffs = new Staff(request.body);
    await Staffs.save();
    response.send(Staffs);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/Staffs", async (request, response) => {
  try {
    const Staffs = await Staff.find({_id: "6130be91e3c08995617a3939"})
    response.send(Staffs);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;