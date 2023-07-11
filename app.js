const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const budgetingController = require("./controllers/budgetingController");

app.get("/", (req, res) => {
  res.send("welcome to Budgeting app");
});

app.use("/transactions", budgetingController);

app.use("*", (req, res) => {
  res.status(404).json({ message: "page not found" });
});
module.exports = app;
