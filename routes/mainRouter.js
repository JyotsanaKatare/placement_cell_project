
const express = require('express');
const router = express.Router()
const studentRouter = require('./studentRouter')
const employeeRouter = require('./employeeRouter')
const interviewRouter = require('./interviewRouter')

router.use("/student", studentRouter)
router.use("/employee",employeeRouter)
router.use("/interview",interviewRouter)

module.exports = router;
