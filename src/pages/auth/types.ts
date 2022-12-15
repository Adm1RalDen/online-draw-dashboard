import { UserLoginFormData, UserRegistrationFormData } from 'types/user'

export interface UserLoginData extends UserLoginFormData {
  captcha: string
}

export interface UserRegistrationData extends UserRegistrationFormData {
  captcha: string
}
