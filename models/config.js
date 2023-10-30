
const mongoose = require('mongoose')
mongoose.set("strictQuery",false)

mongoose.connect("mongodb://127.0.0.1:27017/placementCell",{
    useNewUrlParser : true,
})

mongoose.connection.on("error",(err) => {
    console.log("Mongoose Error",err)
})

mongoose.connection.on("connected",(res,err) =>{
    console.log("Mongoose Connected")
})
