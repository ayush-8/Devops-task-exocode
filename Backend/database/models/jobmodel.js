const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobtype: {
    type: String,
    required: true,
  },
  aboutdesc: {
    type: String,
    required: true,
  },
  aboutPoints: {
    type: [String],
    default: [],
  },
  offersdesc: {
    type: String,
    required: true,
  },
  offersPoints: {
    type: [String],
    default: [],
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

const jobModel = mongoose.model("jobModel", jobSchema);
module.exports = jobModel;
