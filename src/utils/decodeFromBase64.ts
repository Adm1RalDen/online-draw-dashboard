import CryptoJS from 'crypto-js'

export const decodeFromBase64 = (str: string) => {
  try {
    const parse = CryptoJS.enc.Base64.parse(str)
    const result = CryptoJS.enc.Utf8.stringify(parse)
    return result
  } catch {
    return null
  }
}
