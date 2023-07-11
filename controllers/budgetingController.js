const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let budgetingArray = require("../Models/budgetingModel");

function isValueValid(req, res, next) {
  let { item_name, amount, date, from, category, type } = req.body;
  amount = Number(amount);
  const status =
    typeof item_name === "string" &&
    typeof date === "string" &&
    typeof from === "string" &&
    typeof category === "string" &&
    typeof amount === "number" &&
    typeof type === "string";

  if (!status) {
    res.send("Error! Wrong datatype entered.");
  } else {
    next();
  }
}

router.get("/", (req, res) => {
  res.json(budgetingArray);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundTransaction = budgetingArray.find((item) => item.id === id);
  if (foundTransaction) {
    res.json(foundTransaction);
  } else {
    res.redirect("/*");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const filteredArray = budgetingArray.filter((item) => item.id !== id);
  if (filteredArray.length !== budgetingArray.length) {
    budgetingArray = filteredArray;
    res.json(budgetingArray);
  } else {
    res.redirect("/*");
  }
});

router.post("/", isValueValid, (req, res) => {
  const newTransaction = {
    id: uuidv4(),
    ...req.body,
  };
  budgetingArray.push(newTransaction);
  res.json(budgetingArray);
});

router.put("/:id/edit", isValueValid, (req, res) => {
  const { id } = req.params;
  const transactionIndex = budgetingArray.findIndex((item) => item.id === id);
  if (transactionIndex !== -1) {
    budgetingArray[transactionIndex] = {
      id: uuidv4(),
      ...req.body,
    };
    res.json(budgetingArray);
  } else {
    res.redirect("/*");
  }
});

module.exports = router;
