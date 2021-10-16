var crypto = require("crypto");
const utf8 = require('utf8');
const passphrase = "DogeToTheM00n"


var encryptStringWithRsaPublicKey2 = function (toEncrypt, PublicKey) {
    //var absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);
    //PublicKey=utf8.encode(PublicKey)
    var publicKey = PublicKey
    var buffer = Buffer.from(toEncrypt);
    var encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString("base64");
};

var decryptStringWithRsaPrivateKey2 = function (toDecrypt, PrivateKey) {
    //var absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey);
    var privateKey = PrivateKey
    var buffer = Buffer.from(toDecrypt, "base64");
    const decrypted = crypto.privateDecrypt(
        {
            key: privateKey.toString(),
            passphrase: passphrase,
        },
        buffer,
    )
    return decrypted.toString("utf8");
};





//const key="-----BEGIN PUBLIC KEY----- MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA53ETNfzI7Daw54d0eXFfTBt2IYx7RZ3PvmN9cg2mR20ebeklx88szg6Y1Lt5PIIeXY341KG6HdAl5uuqfd89mlDPOlcbGy1dClkgywWug97pOyl+CDGDbGvLZCH2Dx6Ri/cwAGB5wItI4YTW7JkIlx+CPjbDxuuslbR/wJTikGNPlRswOkI/zic5TGa1ShYrQcB6mHH9pU07O93gHnfGQppgJXdpgMTX+5g72accpuCu8QxbYkbxq/5CVvIQpyhutmYnKS9sDob11NZwHJub4OVsES3ZI5zF9Ew88oBh8n3HdufTne1PYrQvkXNwO1OkJ9w+JxvNIzdMWNm5PTvlk16ZZ6lBoKDtXPzBj4p1Nmc51bTJdyvHmO6UTh9dYo84cuA452Wkg4el/Z5Mdw/qKgzC77ODamKnHM0TKc3CepUhEE0d8xEPvfYVkHWuSlZ6tdHnpYpAMDUeo/WCTWpUcPvdt3o5DWYEE4FDHH35RMBjy5vedQd61RwWhtkACS30rY7WiorHLbJSEHHhzPEifAffq+89khw+7pB+NXFRZrUUtJNzKEvAE9XMtFSed/EdcjSAdPy73VUuL4cf2701D3bGRmdbxCPmhIzqA7uNsJPMdq9ue9+AUed9hmCIVcsTRcqZzApuFPbs77PPZCBUKUg8KOa+p5dSjuFRA30L7Q0CAwEAAQ==-----END PUBLIC KEY-----"
// function anana(){
// const key =`-----BEGIN PUBLIC KEY-----
// ${process.env.PUBLIC_KEY}
// -----END PUBLIC KEY-----`
// console.log(key)

// let a = encryptStringWithRsaPublicKey2(JSON.stringify(aa),key)
// console.log(a)
//}
module.exports={
    encryptStringWithRsaPublicKey2,
    decryptStringWithRsaPrivateKey2,
    
}


