import CryptoJS from "crypto-js";

export const generateMD5 = (input: string): string => {
  return CryptoJS.MD5(input).toString();
};
