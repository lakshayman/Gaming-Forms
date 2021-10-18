const mongoose = require("mongoose");
const bgmiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  mobileno: {
    type: Number,
    required: true,
  },
  bgmiUsername: {
    type: String,
    required: true,
  },
  bgmiUserid: {
    type: String,
    required: true,
  },
  discordid: {
    type: String,
    required: true
  },
});

module.exports = bgmi = mongoose.model("bgmi", bgmiSchema);
