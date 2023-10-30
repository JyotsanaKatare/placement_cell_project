
const mongoose = require('mongoose')
const interviewModelSchema = new mongoose.Schema(
	{
		interviewer: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
        time: {
			type: String,
			required: true,
		},
		studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'student'
        },
        interviewId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'interview'
        },
        isActive: {
            type: Boolean,
            required: true,
            default: true
        }
    })

    interviewModelSchema.set('timestamps',true)
    module.exports = mongoose.model('interview',interviewModelSchema)
