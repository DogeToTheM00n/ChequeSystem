const { subtle } = require("crypto").webcrypto;
const str2ab = require("./stringToArrayBuffer");

const decrypt = async (encryptedData) => {
  const jwkPrivateKey = JSON.parse(process.env.PRIVATE_KEY);
  const cryptoKey = await subtle.importKey(
    "jwk",
    jwkPrivateKey,
    { name: "RSA-OAEP", hash: "SHA-256" },
    false,
    ["decrypt"]
  );
  //console.log("crypto000Key:",cryptoKey);
  const plainAB = await subtle.decrypt(
    { name: "RSA-OAEP" },
    cryptoKey,
    Uint8Array.from(atob(encryptedData), (c) => c.charCodeAt(0))
  );
  const dec = new TextDecoder();
  console.log("dec:",dec.decode(plainAB))
  return dec.decode(plainAB);
};

module.exports = {decrypt};
