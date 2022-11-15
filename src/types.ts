import { ToolsEnum } from 'hooks/useCanvas/types'

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
  role: string
  email: string
  country: string
  city: string
  color: string
  gender: string
  date: string
  biography: string
  isUse2FA: boolean
}

export interface AuthorizedUserObject {
  token: string
  data: AuthorizedUser
}
export interface SavedUserObject {
  token: string
  user: Pick<AuthorizedUser, 'name' | 'role' | 'id'>
}

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

export interface ChildrenProps {
  children: React.ReactNode
}
export interface UserInRoom {
  userName: string
  userId: string
}

export interface AuthResponse {
  token: string
  refreshToken: string
  user: Pick<AuthorizedUser, 'name' | 'role' | 'id'>
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

export interface ServerResponseError {
  data: {
    message: string
  }
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

export interface CustomRefObject<T> {
  readonly current: T
}
