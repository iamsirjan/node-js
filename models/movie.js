const express = require("express");

const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
    },
  })
);

module.exports.Customer = Customer;
