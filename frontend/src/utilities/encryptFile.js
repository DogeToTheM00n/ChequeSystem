import strtoab from "./stringToArrayBuffer";
import ab2str from "./arrayBufferToString";
const encryptWithServerPublicKey = async (data, key) => {
  const cryptoKey = {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"]
)
  const enc = new TextEncoder();
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    cryptoKey,
    enc.encode(JSON.stringify(data))
  );
  return ab2str(encrypted);
};

export default encryptWithServerPublicKey;
