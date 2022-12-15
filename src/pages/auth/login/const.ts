import { InputTypes } from 'const/enums'

import { UserLoginFormData } from 'types/user'

export const initialValues: UserLoginFormData = {
  email: '',
  password: ''
}

export const LoginFileds: (InputTypes.EMAIL | InputTypes.PASSWORD)[] = [
  InputTypes.EMAIL,
  InputTypes.PASSWORD
]
