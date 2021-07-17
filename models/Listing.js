const mongoose = require("mongoose");

const listingSchema = mongoose.Schema({
  duration: String,
  jd: String,
  location: String,
  mode: String,
  remote: Boolean,
  skills: Array,
  startDate: String,
  stipend: Array,
  title: String,
});

module.exports = mongoose.model("Listing", listingSchema);
