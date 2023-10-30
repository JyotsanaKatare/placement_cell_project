
require('./models/config')
const express = require('express')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const router = require('./routes/mainRouter')
dotenv.config()

const app = express()
const path = require('path');
const template_path = path.join(__dirname,'./views');
app.set('view engine','hbs');
app.set('views',template_path);

app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyparser.urlencoded({extended:false}))
app.use("/",router)

app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render('index')
})

const server = app.listen(process.env.port,function(req,res) {
    console.log(`App is running on port number:${process.env.port}`)
})

module.exports = server
