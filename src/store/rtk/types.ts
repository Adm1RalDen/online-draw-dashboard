export interface Create2FARequestData {
  secretKey: string
  qrcode: string
}

export interface ConfirmCreating2FaData {
  emailCode: string
  secure2FACode: string
}

export interface Disable2FAData {
  password: string
  secure2FACode: string
}

export interface RecoverPasswordData {
  email: string
}

export interface ResetPasswordData {
  password: string
  confirmPassword: string
  link: string | null
}

export enum ServiceName {
  USER = 'User',
  TWOFA = 'TwoFa'
}
