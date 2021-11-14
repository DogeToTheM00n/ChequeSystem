const str2ab = (str) => {
  return Uint8Array.from(atob(str), c => c.charCodeAt(0))
};

export default str2ab;
