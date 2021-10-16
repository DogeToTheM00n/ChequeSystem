const db_model = require('../../db/db_model.js')
const endcrypt = require('../../encryptAndDecrypt/endcrypt.js')


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

    const algorithm = "aes-256-cbc";

    // generate 16 bytes of random data
    const initVector = crypto.randomBytes(16);




    // secret key generate 32 bytes of random data
    const Securitykey = crypto.randomBytes(32);
    const aes_key = process.env.AES_KEY
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    //decryptedImages = []

    let decryptedData = decipher.update(req.body.obj, "hex", "utf-8");

    decryptedData += decipher.final("utf8");
    const decryptedObject = JSON.parse(decryptedData);

    var decryptedPhotos=[]
    const flag = await checkMICRCode(username, decryptedObject.chequeCode)
    if (flag) {
        const chequeId = decryptedObject.username + await CountDocuments(username)
        for (var i = 0; i < decryptedObject.chequePhotographs.length; i++) {
            var bufferValue = Buffer.from(decryptedData,"base64")
            //console.log("buffer: ",bufferValue)
            decryptedPhotos.push(bufferValue)
        }
        const cheque = new db_model.chequeModel({
            username: decryptedObject.username,
            chequeCode: decryptedObject.chequeCode,
            chequePhotographs: decryptedPhotos,
            _id: chequeId,

        })
        cheuque.save((err) => {
            if (err) throw err
            console.log("Cheque created successfully")
        })
        await AddChequeToCustomer(decryptedObject.username, chequeId)
        await removeMICRCode(decryptedObject.username,decryptedObject.chequeCode)
        res.json(true)
    } else {
        res.json(false)
    }

}



module.exports ={
    depostCheque
}