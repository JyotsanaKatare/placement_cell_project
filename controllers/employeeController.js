
const employeeModelSchema = require("../models/employeeModelSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const empSignUp = async (req, res) => {
    try {
        const isEmailExists = await employeeModelSchema.findOne({ email: req.body.email });
        if (isEmailExists) {
            res.status(409).json({
                success: "Failure",
                message: "Employee email is already exists"
            });
        }
        else {
            const empSignUp = await new employeeModelSchema(req.body)
            const salt = await bcrypt.genSalt(10);
            empSignUp.password = await bcrypt.hash(req.body.password, salt);
            try {
              
                empSignUp.save();
                res.status(201).json({
                    success: "Success",
                    message: "Employee successfully signUp"
                });
            } catch (err) {
                res.status(400).json({
                    success: "Failure",
                    message: err.message
                });
            }
        }
    }
    catch (err) {
        res.status(400).json({
            success: "Failure",
            message:  err.message
        });
    }
}


const empLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const employee = await employeeModelSchema.findOne({ email: email });
            if (employee != null) {
                const isMatch = await bcrypt.compare(password, employee.password);
                if (email === email && isMatch) {
                    const token = jwt.sign({ employeeId: employee._id }, process.env.JWT_SECRET_KEY,{ expiresIn: '5d' });
                    res.status(200).send({
                        success: "Success",
                        message: "Employee successfully logIn",
                        "data": employee,
                        "token": token
                    });
                }
                else {
                    res.status(400).send({
                        success: "Failure",
                        message: "Employee's email or password is not valid",
                    });
                }
            } else {
                res.status(400).send({
                    success: "Failure",
                    message: "Not a registered employee"
                });
            }
        }
    } catch (err) {
        res.status(400).json({
            Success: "failure",
            message: err.message
        });
    }
};

module.exports = {
    empSignUp,
    empLogin
}
