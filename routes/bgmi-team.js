const express = require("express");
const router = express.Router();
const bgmi = require("../models/bgmi-team");

router.get("/", (req, res) => {
  res.render("bgmi-team",{
    error: req.flash("error"),
    success: req.flash("success"),
  });
});

router.post("/", async (req, res) => {
  const { name, email, college, mobileno, codUsername, discordname} = req.body;

  try {
    let bgmiuser = await bgmi.findOne({ email });
    if (bgmiuser) {
      req.flash("error", "Email already registered");
      // return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
      return res.redirect("/bgmi-team");
    }
    bgmiuser = new bgmi({
      name,
      email,
      college,
      mobileno,
      codUsername,
      discordname,
    });

    bgmiuser
      .save()
      .then(() => {
        req.flash("success", "Thank you for registering!");
        res.redirect("/bgmi-team");
      })
      .catch((err) => {
        res.status(500).send("Server error");
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
