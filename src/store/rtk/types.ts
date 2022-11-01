export type Create2FARequestData = {
  secretKey: string
  qrcode: string
}

export type ConfirmCreating2FaData = {
  emailCode: string
  secure2FACode: string
}

export type Disable2FAData = {
  password: string
  secure2FACode: string
}
