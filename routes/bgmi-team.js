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
  const { teamleadername,
    teamleaderemail,
    teamleadermobno,
    teamleaderUsername,
    teamleaderUserid,
    teamleaderdiscordid,
    member1Username,
    member1Userid,
    member1discordid,
    member2Username,
    member2Userid,
    member2discordid,
    member3Username,
    member3Userid,
    member3discordid,
    member4Username,
    member4Userid,
    member4discordid } = req.body;

  try {
    let bgmiuser = await bgmi.findOne({ teamleaderemail });
    if (bgmiuser) {
      req.flash("error", "Email already registered");
      // return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
      return res.redirect("/bgmi-team");
    }
    bgmiuser = new bgmi({
      teamleadername,
      teamleaderemail,
      teamleadermobno,
      teamleaderUsername,
      teamleaderUserid,
      teamleaderdiscordid,
      member1Username,
      member1Userid,
      member1discordid,
      member2Username,
      member2Userid,
      member2discordid,
      member3Username,
      member3Userid,
      member3discordid,
      member4Username,
      member4Userid,
      member4discordid
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
