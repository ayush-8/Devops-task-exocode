const jobModel = require("../database/models/jobmodel");
const makeArray = require("./helper");

module.exports.addJob = async (req, res, err) => {
  const {
    role,
    location,
    jobtype,
    aboutdesc,
    aboutdetails,
    offersdesc,
    offersdetails,
    name,
    email,
    contact,
  } = req.body;

  console.log(req.body)

  try {
    const aboutList = makeArray(aboutdetails, ",");
    const offerList = makeArray(offersdetails, ",");

    const newJob = await jobModel.create({
      role: role,
      location: location,
      jobtype: jobtype,
      aboutdesc: aboutdesc,
      aboutPoints: aboutList,
      offersdesc: offersdesc,
      offersPoints: offerList,
      name: name,
      email: email,
      contact: contact,
    });

    if (newJob) {
      res.status(201).json({
        msg: "New Job Added Successfully",
        payload: newJob,
      });
    }
  } catch (err) {
    res.status(500).send(err)
  }
};

module.exports.allJobs = async (req, res, err) => {
  try {
    const jobsList = await jobModel.find({});

    if (jobsList) {
      res.status(200).send(jobsList);
    }
  } catch (err) {}
};

module.exports.singleJob = async (req, res, err) => {
  try {
    const { id } = req.params;
    console.log(id);
    const job = await jobModel.findOne({
      _id: id,
    });

    if (job) {
      res.status(200).send(job);
    }
  } catch (err) {
    res.send("No Job Bro!");
  }
};
