const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user already exists");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.send(result);
  return;
});

module.exports = router;
