import sha265 from 'crypto-js/sha256'

export const cryptoSha256 = (str: string) => {
  return sha265(str).toString()
}
