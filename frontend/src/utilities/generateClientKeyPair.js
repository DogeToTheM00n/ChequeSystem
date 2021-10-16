import abtostr from "./arrayBufferToString";

const generateKeyPair = async () => {
  const res = await window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 4096,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  );
  const privateKey = await crypto.subtle.exportKey("jwk", res.privateKey);
  localStorage.setItem("ClientKey", JSON.stringify(privateKey));
  const key = await crypto.subtle.exportKey("spki", res.publicKey);
  return abtostr(key);
};

export default generateKeyPair;
