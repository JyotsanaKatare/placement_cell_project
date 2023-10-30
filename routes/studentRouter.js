
const express = require('express')
const router = express.Router()
const student = require('../controllers/studentController')

router.post("/add_student",student.addStudent)

module.exports = router;
