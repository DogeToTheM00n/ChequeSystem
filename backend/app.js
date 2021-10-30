// External Packages
const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const multer = require('multer')
const cors = require('cors')

// Custom packages

const db_model = require('./db/db_model.js')
const saveUserDetail = require('./routes/admin/userDetails.js');
const adminLogin = require('./routes/admin/adminLogin.js');
const profile= require('./routes/customer/profile.js');
const signupAndLogin = require('./routes/customer/signupAndLogin.js')
const transactions = require('./routes/customer/transactions.js')
const cheque = require('./routes/customer/depositCheque.js')
const decrypt = require('./utilities/decrypt')
const aesEncy = require('./utilities/encryptAes')





const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const upload = multer()

//console.log(process.env.PUBLIC_KEY.replace(/\\n/g, '\n'))
db_model.connectWithDatabase()

//const enc=aesEncy.encryptMessage(obj)
//aesEncy.decryptMessage(enc)
//aesEncy.all()

app.get('/api/getPublicKey', (req, res) => {
    // process.env.PUBLIC_KEY
    res.json(process.env.PUBLIC_KEY)
})

app.get('/api/checkAccountNumber', (req, res) => {
    signupAndLogin.checkAccountNumber(req, res)
})


app.post('/api/userDetails', upload.any(), (req, res) => {
    saveUserDetail.saveUserDetail(req, res);
})

app.post('/api/depositCheque', (req, res) => {
    cheque.depostCheque(req, res)
})


app.post('/api/adminLogin', (req, res) => {
    adminLogin.adminLogin(req, res);
})

app.post('/api/admin', (req, res) => {
    saveUserDetail.createAdmin(req, res);
})

app.post('/api/signUp', (req, res) => {
    signupAndLogin.signUp(req, res);
})

app.post('/api/login', (req, res) => {
    signupAndLogin.logIn(req, res);
})

app.post('/transactions', (req, res) => {
    transactions.transactions(req, res);
})

app.post('/api/transactionDetail', (req, res) => {
    transactions.transactionDetails(req, res);
})

app.get('/api/profile',(req,res)=>{
    profile.profile(req,res);
})

// app.post("/abc", upload.any(),(req, res) => {
//     const f = req.files[0]
//     aesEncy.all(f.buffer)
// })

app.listen(8080, () => {
    console.log("Pram Server is running on port 8080")
})