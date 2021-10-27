const db_model = require('../../db/db_model.js')
const decrypt = require("../../utilities/decrypt");
const bcrypt =require('bcrypt');

function checkUsername(username){
    return new Promise(resolve=>{
        db_model.adminModel.findOne({username:username},(err,admin)=>{
            if(err) throw err;
            if(admin!=null) {
                resolve(admin);
            }
            resolve(false);
        })
    })
}

// async function adminLogin2(req, res){
//     const privatekey = `-----BEGIN ENCRYPTED PRIVATE KEY-----
// ${process.env.PRIVATE_KEY}
// -----END ENCRYPTED PRIVATE KEY-----`
//     const decrytedString = endcrypt.decryptStringWithRsaPrivateKey2(req.body.object, privatekey)
//     const credentials =json.parse(decrytedString);
//     // console.log(credentials);
//     const admin = await checkUsername(credentials.username);
//     if(!admin){
//         bcrypt.compare(credentials.password,admin.password, (err,result)=>{
//             if(err) throw err;
//             if(result){
//                 res.json({username :admin.username});
//             }else{
//                 res.send(401);
//             }
//         })
//     }
// }

async function adminLogin(req,res){
    decrypt(req,body.obj).then( async (decryptedString)=>{
        const credentials = JSON.parse(decryptedString);
        console.log(credentials);
        const flag = await checkUsername(credentials.username);
        if(flag!=false){
            bcrypt.compare(credentials.password, flag.password, (err, result) => {
                if (err) throw err;
                if (result) {   
                    res.send({username:flag.username})
                }else {
                    res.send(401);
                }
              });
        }
    })
}

function getPendingCheque(){
    return new Promise(resolve=>{
        db_model.chequeModel.find({chequeStatus:2},(err,cheques)=>{
            if(err) throw err;
            // console.log(cheques._id);
            resolve(cheques._id);
        })
    })
}

async function adminDashboard(req,res){
    const chequesId =await getPendingCheque();
    res.json(chequesId);
}

module.exports ={
    adminLogin,
    adminDashboard
}