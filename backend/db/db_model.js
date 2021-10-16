const mongoose = require('mongoose')

const schemas=require('../db_schemas/db_schemas.js')

const mongoURL="mongodb://localhost:27017/ChequeDB"

function connectWithDatabase(){
    mongoose.connect(mongoURL,{useNewUrlParser:true},()=>{
        console.log("Connected with MongoDB database")
    })
}

const adminModel=mongoose.model("AdminSchema",schemas.adminSchema)
const customerModel=mongoose.model("CustomerSchema",schemas.customerSchema)
const chequeModel=mongoose.model("ChequeSchema",schemas.chequeSchema)
const userDetailsModel=mongoose.model("UserDetails",schemas.userDetailsSchema)






module.exports={
    connectWithDatabase,
    adminModel,
    customerModel,
    chequeModel,
    userDetailsModel
}