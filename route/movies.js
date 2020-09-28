const { Customer } = require("../models/movie");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.send(customers);
});

router.post("/", async (req, res) => {
  let customer = new Customer({
    name: req.body.name,
  });

  customer = await customer.save();

  res.send(customer);
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer)
    return res.status(404).send("the user with given id cant be found");
  res.send(customer);
});

module.exports = router;
