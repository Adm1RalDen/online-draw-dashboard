export interface UserDataInRoom {
  userName: string
  userId: string
}

export interface UserLoginFormData {
  email: string
  password: string
}

export interface UserRegistrationFormData {
  email: string
  password: string
  name: string
}

export interface AuthorizedUser {
  id: string
  name: string
  avatar: string
  originalAvatar: string
  backgroundFon: string
  email: string
  country: string
  city: string
  color: string
  gender: string
  date: string
  biography: string
  isUse2FA: boolean
}

export interface SavedUserObject {
  token: string
  user: Pick<AuthorizedUser, 'name' | 'id'>
}

export interface AuthResponse {
  token: string
  refreshToken: string
  user: Pick<AuthorizedUser, 'name' | 'id'>
}

export interface VerifyRequestData {
  userId: string
  secure2FACode: string
}

export interface User2FALoginResponse {
  isUse2FA: boolean
  userId: string
  attemptsLeftCount: number
}
