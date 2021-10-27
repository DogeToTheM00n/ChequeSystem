const db_model = require("../../db/db_model.js");
const decrypt = require("../../utilities/decrypt");
const encrypt = require("../../utilities/encrypt");
const bcrypt = require("bcrypt");
const saltRounds = 10;

function checkAcNum(accountNumber) {
  return new Promise((resolve) => {
    db_model.userDetailsModel.findOne({ _id: accountNumber }, (err, res) => {
      if (err) throw err;
      if (res != null) {
        resolve(true);
      }
      resolve(false);
    });
  });
}

async function checkAccountNumber(req, res) {
  const accountNumber = req.query.accountNumber;
  const resp = await checkAcNum(accountNumber);
  res.json(resp);
}

async function signUp(req, res) {
  // const a = {
  //   username: "abc",
  //   password: "abc",
  //   name: "abc",
  //   mobileNumber: "abcdefghij",
  //   accountNumber: "1234",
  //   ifscCode: "12dee",
  // }
  // const enc = await encrypt.encryptWithClientPublicKey(a,process.env.PUBLIC_KEY)
  // console.log("encrypted from signup: ",enc)
  console.log(req.body.obj)
  const customer = JSON.parse(await decrypt.decrypt(req.body.obj))
  console.log(customer)
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(customer.password, salt, (err, hash) => {
      if (err) throw err;
      console.log(hash)
      const cust = new db_model.customerModel({
        password: hash,
        username: customer.username,
        name: customer.name,
        mobileNumber: customer.mobileNumber,
        accountNumber: customer.accountNumber,
        ifscCode: customer.ifscCode,
        chequeIdArray: []
      })
      cust.save((err) => {
        if (err) throw err
      })
      res.json(true)
    })
  })

}

function checkUsername(t1) {
  return new Promise((resolve) => {
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
  decrypt(req.body.obj).then(async (decryptedString) => {
    const credentials = JSON.parse(decryptedString);
    // console.log(credentials);
    const flag = await checkUsername(credentials.username);
    if (flag != false) {
      bcrypt.compare(credentials.password, flag.password, (err, result) => {
        if (err) throw err;
        if (result) {

          obj_info = {
            username: flag.username,
            mobileNumber: flag.mobileNumber,
            name: flag.name,
            aes_key: process.env.AES_KEY,
          };
          console.log(obj_info);
          const frontendPublicKey = req.body.frontendPublicKey;
          console.log(frontendPublicKey);
          encryptWithClientPublicKey(
            JSON.stringify(obj_info),
            frontendPublicKey
          ).then((a) => {
            console.log(a);
            res.json({ obj: a });
          });
        } else {
          res.send(401);
        }
      });
    }
  });
}

module.exports = {
  signUp,
  checkAccountNumber,
  logIn,
};
