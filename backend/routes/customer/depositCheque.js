const db_model = require('../../db/db_model.js')
const aesEncandDec= require("../../utilities/encrypt&DecryptAes.js")
const decrypt=require("../../utilities/decrypt.js")


function CountDocuments(username) {
    return new Promise(resolve => {
        db_model.customerModel.findOne({ username: username }, (err, customer) => {
            if (err) throw err;
            resolve(customer.ChequeIdArray.length);
        });
    })
}

function AddChequeToCustomer(username, chequeId) {
    return new Promise(resolve => {
        db_model.customerModel.findOneAndUpdate(
            { username: username },
            { $push: { ChequeIdArray: chequeId } },
            function (error, success) {
                if (error) {
                    console.log(error);
                    resolve(error);
                } else {
                    //console.log(success);
                    resolve(success);
                }
            });

    });
}

function removeMICRCode(username, code) {
    return new Promise(resolve => {
        db_model.userDetailsModel.findOneAndUpdate(
            { username: username },
            { $pull: { chequeCodeArray :code } },
            function (error, success) {
                if (error) {
                    console.log(error);
                    resolve(error);
                } else {
                    //console.log(success);
                    resolve(success);
                }
            });

    });
}


function checkMICRCode(username, code) {
    return new Promise(resolve => {
        db_model.userDetailsModel.findOne({ username: username, chequeCodeArray: { $in: [code] } }, (err, result) => {
            if (err) throw err;
            if (result != null)
                resolve(true)
            resolve(false)
        })
    })
}



async function depostCheque(req, res) {

let arrayBuffer=req.body.images
// for(var i=0;i<req.body.images.length;i++){
//     arrayBuffer.push(aesEncandDec.decryptMessage(req.body.images[i]))
// }
   
    const obj=   JSON.parse( await dcrypt.decrypt(req.body.obj)) 
    console.log(obj)
    const id=obj.username+"@"+await CountDocuments(obj.username)
    const cheque=new db_model.chequeModel({
        username:obj.username,
        chequeCode:obj.cheque_code,
        chequePhotographs: arrayBuffer,
        _id:id
    })
    cheque.save((err)=>{
        if(err) throw err;
        console.log("Cheque saved to database successfully")
    })
    res.json(true)
}



module.exports ={
    depostCheque
}