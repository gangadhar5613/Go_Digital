const express = require("express");
const router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

// User Data To Make Card

const Card = require("../models/cards");
router.post("/", upload.single("avatar"), (req, res) => {
  Card.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("userCard", { card: data });
      console.log(data);
    }
  });
});

router.put("/:id", (req, res) => {
  Card.findByIdAndUpdate({ _id: id }, req.body, (err, card) => {
    res.render("updateSuccess");
  });
});
module.exports = router;
