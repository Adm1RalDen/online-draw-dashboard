import { UserLoginFormData, UserRegistrationFormData } from 'types'

export interface UserLoginData extends UserLoginFormData {
  captcha: string
}

export interface UserRegistrationData extends UserRegistrationFormData {
  captcha: string
}
