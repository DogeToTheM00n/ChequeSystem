import str2ab from "./stringToArrayBuffer";

const decrypt = async (encryptedData) => {
  const privateKey = JSON.parse(localStorage.getItem("ClientKey"));
  const cryptoKey = await window.crypto.subtle.importKey(
    "jwk",
    privateKey,
    { name: "RSA-OAEP", hash: "SHA-256" },
    false,
    ["decrypt"]
  );
  const plainAB = await window.crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    cryptoKey,
    Uint8Array.from(atob(encryptedData), (c) => c.charCodeAt(0))
  );
  const dec = new TextDecoder();
  return dec.decode(plainAB);
};

export default decrypt;