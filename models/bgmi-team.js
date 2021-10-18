const mongoose = require("mongoose");
const bgmiteamSchema = new mongoose.Schema({
  teamleadername: {
    type: String,
    required: true,
  },
  teamleaderemail: {
    type: String,
    required: true,
  },
  teamleadermobno: {
    type: Number,
    required: true,
  },
  teamleaderUsername: {
    type: String,
    required: true,
  },
  teamleaderUserid: {
    type: String,
    required: true,
  },
  teamleaderdiscordid: {
    type: String,
    required: true,
  },
  member1Username: {
    type: String,
    required: true,
  },
  member1Userid: {
    type: String,
    required: true,
  },
  member1discordid: {
    type: String,
    required: true,
  },
  member2Username: {
    type: String,
    required: true,
  },
  member2Userid: {
    type: String,
    required: true,
  },
  member2discordid: {
    type: String,
    required: true,
  },
  member3Username: {
    type: String,
    required: true,
  },
  member3Userid: {
    type: String,
    required: true,
  },
  member3discordid: {
    type: String,
    required: true,
  },
  member4Username: {
    type: String,
  },
  member4Userid: {
    type: String,
  },
  member4discordid: {
    type: String,
  },
});

module.exports = bgmiteam = mongoose.model("bgmiteam", bgmiteamSchema);
