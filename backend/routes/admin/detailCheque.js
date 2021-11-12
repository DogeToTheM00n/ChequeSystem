const db_model = require('../../db/db_model.js')
const decrypt = require("../../utilities/decrypt");

function getSenderSigature(_id){
    return new Promise(resolve =>{
        db_model.userDetailsModel.findOne({_id:_id},(err,result)=>{
            if(err) throw err;
            resolve(result.accountHolderSignature.buffer);
        })
    })
}
function getFileArray(cheque_id) {
    return new Promise(resolve =>{
        db_model.chequeModel.findOne({cheque_id:_id},(err,result)=>{
            if (err) throw err;
            resolve(result.chequePhotographs);
        })
    })
}
async function detailCheque(req,res){
    const signatureImagebuffer = await getSenderSigature(req.query.accountNumber);
    const signatureImagebase64=  signatureImagebuffer.toString('base64');
    const fileArray = await getFileArray(req.query.cheque_id);
  
    res.json({
        signatureImagebase64,
        fileArray
    })
}
function getrecipientName(account_number){
    return new Promise(resolve=>{
        db_model.userDetailsModel.findOne({recipientAccountNo:_id},(err,result)=>{
            if(err) throw err;
            resolve(result.accountHolderName);
        })
        resolve(null);
    })
}

async function recipientName(req,res){
    const name = await getrecipientName(req.query.recipientAccountNo);
    res.json({recipientName : name});
}



function getSenderAccountNoAndAmount(_id){ 
    return new Promise((resolve) =>{
        db_model.chequeModel.findOne({_id:_id},(err,cheque)=>{
            if(err) throw err;
            // resolve(cheque.senderAccountNo);
            db_model.userDetailsModel.findOne({_id:cheque.senderAccountNo},(err,result)=>{
                if(err) throw err;
                resolve({
                    senderAccountNo:cheque.senderAccountNo,
                    senderBalance:result.balance
                })
            })
        })
    })
}

function updateCheque(_id,amount,name,accountNumber){
    return new Promise((resolve)=>{
        const update = { 
            amount: amount,
            recipientName:name,
            recipientAccountNo: accountNumber,
            chequeStatus:1
            };
        db_model.chequeModel.findOneAndUpdate({_id:_id},{ $set : {update},},(err,result)=>{
            if(err) throw err;
            resolve(true);
        })
    })
}

function removeCheque(accountNumber,chequeId){
    return new Promise(resolve =>{
        db.model.customerModel.findOneAndUpdate({accountNumber: accountNumber},{ $pull: {chequeIdArray:chequeId} },(err, sender) =>{
            if(err) throw err;
            resolve(true);
        })
    })
}

function changeAmount(accountNumber,_amount){
    return new Promise(resolve=>{
        db_model.userDetailsModel.findOneAndUpdate({_id:accountNumber},{ $inc: {amount:_amount}},(err,result)=>{
            if(err) throw err;
            resolve(true);
        })
    })
}

async function verifyCheque(req, res){
    const status =req.body.status;
    if(status==false) res.json(false);
    else{
        const decryptObject = JSON.parse(await decrypt.decrypt(req.body.object));
        const obj =getSenderAccountNoAndAmount(decryptObject._id);

        if(obj.senderBalance< decryptObject.balance) res.json("LOW ACCOUNT BALANCE!");
        await updateCheque(decryptObject._id, decryptObject.amount,decryptObject.recipientName,
                            decryptObject.recipientAccountNo);
        await changeAmount(decryptObject.recipientAccountNo,decryptObject.amount);
        await changeAmount(obj.senderAccountNo,-decryptObject.amount);
        await removeCheque(obj.senderAccountNo,decryptObject._id);
        res.json(true);
    }   
}

module.exports ={
    detailCheque,
    recipientName,
    verifyCheque
}