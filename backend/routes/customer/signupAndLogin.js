const db_model = require('../../db/db_model.js')
const endcrypt = require('../../encryptAndDecrypt/endcrypt.js')
const bcrypt = require("bcrypt");
const saltRounds = 10;

function checkAcNum(accountNumber) {
    return new Promise(resolve => {
        db_model.userDetailsModel.findOne({ _id: accountNumber }, (err, res) => {
            if (err) throw err
            if (res != null) {
                resolve(true)
            }
            resolve(false)
        })
    })
}


async function checkAccountNumber(req, res) {

    const accountNumber = req.query.accountNumber
    const resp = await checkAcNum(accountNumber)
    res.json(resp)

}


function signUp(req, res) {

    //     const publicKey = `-----BEGIN PUBLIC KEY-----
    // ${process.env.PUBLIC_KEY}
    // -----END PUBLIC KEY-----`
    // let a = endcrypt.encryptStringWithRsaPublicKey2(JSON.stringify(req.body),publicKey)
    // console.log(a)
    const privatekey = `-----BEGIN ENCRYPTED PRIVATE KEY-----
${process.env.PRIVATE_KEY}
-----END ENCRYPTED PRIVATE KEY-----`
    //const customerDetails = req.body.obj
    //console.log(privatekey)
    const decrytedString = endcrypt.decryptStringWithRsaPrivateKey2(req.body.obj, privatekey)
    const customer = JSON.parse(decrytedString)
    // console.log(customer)
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(customer.password, salt, (err, hash) => {
            if (err) throw err;
            cust = new db_model.customerModel({
                username: customer.username,
                password: hash,
                name: customer.name,
                mobileNumber: customer.mobileNumber,
                accountNumber: customer.accountNumber,
                ifscCode: customer.ifscCode,
            })
            cust.save((err) => {
                if (err) throw err
                console.log("Customer Details saved to database successfully")
            })
        })
    })
    res.json(true)
}




function checkUsername(t1) {

    return new Promise(resolve => {
        db_model.customerModel.findOne({ username: t1 }, (err, results) => {
            if (err) throw err;
            if (results != null) {
                //console.log("Hello checkusername");
                resolve(results);

            }
            resolve(false);
        });
    });

}



async function logIn(req, res) {

    const privatekey = `-----BEGIN ENCRYPTED PRIVATE KEY-----
${process.env.PRIVATE_KEY}
-----END ENCRYPTED PRIVATE KEY-----`
    const decrytedString = endcrypt.decryptStringWithRsaPrivateKey2(req.body.obj, privatekey)
    const credentials = JSON.parse(decrytedString)
    console.log(credentials)
    const flag = await checkUsername(credentials.username)
    if (flag != false) {
        bcrypt.compare(credentials.password, flag.password, (err, result) => {
            if (err) throw err;
            if (result) {
                obj_info = {
                    username: result.username,
                    mobileNumber: result.mobileNumber,
                    name: result.name,
                    aes_key: process.env.AES_KEY,
                }
                const frontendPublicKey = req.body.frontendPublicKey
                let a = endcrypt.encryptStringWithRsaPublicKey2(JSON.stringify(obj_info), frontendPublicKey)
                console.log(a)
                res.json({ obj: a })
            }
            else {
                res.send(401);
            }
        });
    }

}


module.exports = {
    signUp,
    checkAccountNumber,
    logIn
}
