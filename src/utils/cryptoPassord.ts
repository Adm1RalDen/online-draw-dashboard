import { SHA256 } from "crypto-js";

export const cryptoSha256 = (str: string) => {
  return SHA256(str).toString();
};
