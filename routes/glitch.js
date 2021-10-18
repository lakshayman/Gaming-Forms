const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("glitch",{
    error: req.flash("error"),
    success: req.flash("success"),
  });
});

module.exports = router;
