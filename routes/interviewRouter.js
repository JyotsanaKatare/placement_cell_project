
const express = require ('express')
const router = express.Router()
const interview = require ('../controllers/interviewController')


router.post("/sch_interview/:id",interview.scheduleInterview)
router.get("/list_interview/:id",interview.studentInterviewDetails)

module.exports = router;
