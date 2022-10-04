import { ToolsEnum } from 'hooks/useCanvas/types'

export interface UserLoginFormData {
  email: string
  password: string
}
export interface UserRegistrationData extends UserLoginFormData {
  name: string
}
export interface AuthorizedUser {
  id: string
  name: string
  avatar: string
  originalAvatar: string
  backgroundFon: string
  role: string
  email: string
  country: string
  city: string
  color: string
  gender: string
  date: string
  biography: string
}

export interface AuthorizedUserObject {
  token: string
  data: AuthorizedUser
}
export interface SavedUserObject {
  token: string
  user: Pick<AuthorizedUser, 'name' | 'role' | 'id'>
}

/* eslint no-unused-vars: "off" */
export interface FunctionWithParams<T> {
  (e: T): void
}
export interface AuthContextTypes {
  isAuth: boolean
  isReady: boolean
  userData: SavedUserObject
  login: FunctionWithParams<UserLoginFormData>
  logout: VoidFunction
  isLoading: boolean
}
export interface RoomType {
  _id: string
}

export type ChildrenProps = {
  children: React.ReactNode
}
export interface UserInRoom {
  userName: string
  userId: string
}

export interface RefreshResponse {
  token: string
  refreshToken: string
  user: Pick<AuthorizedUser, 'name' | 'role' | 'id'>
}
export type VerifyRequestData = {
  userId: string
  code: string
}

export type User2FAData = {
  userId: string
  qrcode: string
}
export interface User2FALoginResponse {
  isUse2FA: boolean
  qrcode: string
  userId: string
}
export interface DrawData {
  roomId: string
  x1?: number
  y1?: number
  x2?: number
  y2?: number
  a?: number
  b?: number
  width?: number
  height?: number
  fillStyle?: string | CanvasGradient | CanvasPattern
  strokeStyle?: string | CanvasGradient | CanvasPattern
  lineWidth?: number
  tool?: keyof typeof ToolsEnum
}

export type CustomRefObject<T> = {
  readonly current: T
}
