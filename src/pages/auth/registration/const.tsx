import { UserRegistrationFormData } from 'types'

enum FieldsEnum {
  EMAIL = 'email',
  NAME = 'name',
  PASSWORD = 'password'
}

export const RegistrationFileds = [FieldsEnum.NAME, FieldsEnum.EMAIL, FieldsEnum.PASSWORD]

export const initialValues: UserRegistrationFormData = {
  name: '',
  email: '',
  password: ''
}
