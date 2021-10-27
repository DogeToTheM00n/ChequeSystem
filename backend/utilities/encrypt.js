const strtoab = require("./stringToArrayBuffer");
const ab2str = require("./arrayBufferToString");
const { subtle } = require("crypto").webcrypto;
const encryptWithClientPublicKey = async (data, key) => {
  const cryptoKey = await subtle.importKey(
    "spki",
    Uint8Array.from(atob(key), c => c.charCodeAt(0)),
    {
      name: "RSA-OAEP",
      modulusLength: 4096,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["encrypt"]
  );
  //console.log(cryptoKey);
  const enc = new TextEncoder();
  const encrypted = await subtle.encrypt(
    { name: "RSA-OAEP" },
    cryptoKey,
    enc.encode(JSON.stringify(data))
  );
  return ab2str.ab2str(encrypted);
};

module.exports = {encryptWithClientPublicKey};
