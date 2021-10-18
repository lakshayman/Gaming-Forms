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
  codUsername: {
    type: String,
    required: true,
  },
  discordname: {
    type: String,
  },
});

module.exports = bgmi = mongoose.model("bgmi", bgmiSchema);
