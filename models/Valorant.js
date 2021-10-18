const mongoose = require("mongoose");
const ValorantSchema = new mongoose.Schema({
  teamleadername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileno: {
    type: Number,
    required: true,
  },
  member1id: {
    type: String,
    required: true,
  },
  member2id: {
    type: String,
  },
  member3id: {
    type: String,
  },
  member4id: {
    type: String,
  },
  member5id: {
    type: String,
  },
  member1did: {
    type: String,
    required: true,
  },
  member2did: {
    type: String,
  },
  member3did: {
    type: String,
  },
  member4did: {
    type: String,
  },
  member5did: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Valorant = mongoose.model("valorant", ValorantSchema);
