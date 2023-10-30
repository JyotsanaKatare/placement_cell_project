
const mongoose = require('mongoose')
const employeeModelSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
        password: {
			type: String,
			required: true,
		},
		contact: {
			type: Number,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
        isActive: {
            type: Boolean,
            required: true,
            default: true
        }
    })

    employeeModelSchema.set('timestamps',true)
    module.exports = mongoose.model('employee',employeeModelSchema)
