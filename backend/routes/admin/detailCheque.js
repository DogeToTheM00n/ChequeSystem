const db_model = require('../../db/db_model.js')

function getSenderSigature(_id){
    return new Promise(resolve =>{
        db_model.userDetailsModel.findOne({_id:_id},(err,result)=>{
            if(err) throw err;
            resolve(results.accountHolderSignature);
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
        db_model.chequeModel.findOne({recipientAccountNo:account_number},(err,result)=>{
            if(err) throw err;
            resolve(result.recipientName);
        })
        resolve(null);
    })
}
async function recipientName(req,res){
    const name = await getrecipientName(req.query.recipientAccountNo);
    res.json({recipientName : name});
}
module.exports ={
    detailCheque,
    recipientName
}