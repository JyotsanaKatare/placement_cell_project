
const interviewModelSchema = require('../models/interviewModelSchema')
const studentModelSchema = require('../models/studentModelSchema')

const scheduleInterview = async (req, res) => {
    try {
        const scheduleInterview = new interviewModelSchema(req.body)
        try {
            scheduleInterview.save();
            res.status(201).json({
                success: "Success",
                message: "Interview schedule"
            })
        } catch (err) {
            res.status(400).json({
                success: "Failure",
                message: err.message
            })
        }
    } catch (err) {
        res.status(400).json({
            success: "Failure",
            message: err.message
        });
    }
}

const studentInterviewDetails = async (req,res) =>{
    const id=req.params.id;
    try{
        const studentDetail = await interviewModelSchema.findOne({studentId:req.params.id})
        .populate({
            path:"studentId",
            select:"name email college status batch "
        }).populate({
            path:"interviewId",
            
        });
        
        res.status(200).json({
            success:"success",
            message :"Show details of student",
            studentDetail: studentDetail,
        })
    }catch(err){
        res.status(400).json({
            success:"Failure",
            message: err.message
        });
    }
  }
  
module.exports = {
    scheduleInterview,
    studentInterviewDetails
}
