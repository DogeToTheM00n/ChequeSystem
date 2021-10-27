import strtoab from "./stringToArrayBuffer";
import ab2str from "./arrayBufferToString";
const encryptWithServerPublicKey = async (data, key) => {
  const cryptoKey = await window.crypto.subtle.importKey(
    "spki",
    strtoab(key),
    {
      name: "RSA-OAEP",
      modulusLength: 4096,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["encrypt"]
  );
  const enc = new TextEncoder();
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    cryptoKey,
    enc.encode(JSON.stringify(data))
  );
  return ab2str(encrypted);
};

export default encryptWithServerPublicKey;
