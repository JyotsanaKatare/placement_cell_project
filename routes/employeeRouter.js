
const express = require ('express')
const router = express.Router()
const employee = require ('../controllers/employeeController')


router.post("/signUp",employee.empSignUp)
router.post("/logIn",employee.empLogin)

module.exports = router;
