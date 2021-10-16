// External Packages
const dotenv = require("dotenv");
dotenv.config();
const express=require('express')
const multer=require('multer')
const cors=require('cors')

// Custom packages

const db_model=require('./db/db_model.js')
const saveUserDetail =require('./routes/admin/userDetails.js');
const signupAndLogin=require('./routes/customer/signupAndLogin.js')
const decrypt = require('./utilities/decrypt');





const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
const upload=multer()

//console.log(process.env.PUBLIC_KEY.replace(/\\n/g, '\n'))
db_model.connectWithDatabase()

app.get('/api/getPublicKey',(req,res)=>{
    // process.env.PUBLIC_KEY
    res.json(process.env.PUBLIC_KEY)
})

app.get('/api/checkAccountNumber',(req, res)=>{
    signupAndLogin.checkAccountNumber(req,res)
})


app.post('/api/userDetails', upload.any(),(req,res)=>{
    saveUserDetail.saveUserDetail(req,res);
})
app.post('/api/admin',(req,res)=>{
    saveUserDetail.createAdmin(req,res);
})

app.post('/api/signUp',(req,res)=>{
    signupAndLogin.signUp(req,res);
})

app.post('/api/login',(req,res)=>{
    signupAndLogin.logIn(req,res);
})

app.listen(8080,()=>{
    console.log("Pram Server is running on port 8080")
})