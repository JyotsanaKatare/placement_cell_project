
const mongoose = require('mongoose')
const studentModelSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		college: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
			enum: ['Placed', 'Not Placed'],
		},
		batch: {
			type: String,
			required: true,
		},
		dsa: {
			type: Number,
			required: true,
		},
		webd: {
			type: Number,
			required: true,
		},
		react: {
			type: Number,
			required: true,
		},
		interviews: [
			{
				companyName: {
					type: String,
				},
				date: {
					type: String,
				},
				result: {
					type: String,
					enum: ['Pass', 'Fail', 'On Hold', 'Did not Attempt'],
				},
			},
		],
		isActive: {
            type: Boolean,
            required: true,
            default: true
        }
	})

studentModelSchema.set('timestamps',true)
module.exports = mongoose.model('student',studentModelSchema)
