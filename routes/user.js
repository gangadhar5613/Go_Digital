const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.post("/", (req, res) => {
  User.create(req.body, (err, user) => {
    res.render("userDas");
  });
});

module.exports = router;
