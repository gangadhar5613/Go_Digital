const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.get("/", (req, res) => {
  res.render("auth");
});
router.post("/", (req, res) => {
  User.findOne({ email: req.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.render("dashboard");
    }
  });
});
module.exports = router;

// toggle form
