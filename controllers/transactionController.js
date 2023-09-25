const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
let transactions = require("../models/transactionModel");

router.get("/", (req, res) => {
    res.json(transactions);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const transaction = transactions.find((item) => item.id === id);

    if (!transaction) {

      res.status(404).json({ status: false, message: "Transaction not found" });

    } else {

      res.status(200).json({ status: true, data: transaction });

    }
  });

  router.post("/", (req, res) => {
    const { item_name, amount, date, from, category } = req.body;
  
    if (!item_name || !amount || !date || !from || !category) {

      res.status(400).json({
        status: false,
        message: "You cannot create an empty transaction.",
      });

    } else {

      const newTransaction = {
        id: uuidv4(),
        item_name,
        amount,
        date,
        from,
        category,
      };

      transactions.unshift(newTransaction);

      res.status(200).json({ status: true, data: newTransaction });
    }
    
  });

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const foundIndex = transactions.findIndex((item) => item.id === id);

    if (foundIndex === -1) {

      res.status(404).json({ status: false, message: "Id not found!" });

    } else {

      let foundTransaction = transactions[foundIndex];

      let newObj = {
        ...foundTransaction,
        ...req.body,
      };

      transactions.splice(foundIndex, 1, newObj);

      res.json({ message: "success", status: true, data: newObj });
    }
});


router.delete("/:id", (req, res) => {
    const { id } = req.params;
    let foundIndex = transactions.findIndex((item) => item.id === id);

    if (foundIndex === -1) {

      res
        .status(404)
        .json({ status: false, message: "Sorry, no transaction with this ID found" });

    } else {

      let foundTransaction = transactions[foundIndex];
      let newTransactions = transactions.filter((item) => item.id !== req.params.id);
      transactions = newTransactions;
  
      res.status(200).json({
        status: true,
        message: "success",
        data: foundTransaction,
      });
    }
  });

module.exports = router;