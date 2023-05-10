const express = require('express')
const {addJob, allJobs, singleJob} = require('../controller/jobcontroller')
const router = express.Router()

router.post('/add', addJob);
router.get('/all', allJobs);
router.get('/job/:id', singleJob);


module.exports = router;