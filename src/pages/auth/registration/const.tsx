import { UserRegistrationData } from 'types'
import * as yup from 'yup'

export const RegistrationFileds = ['name', 'email', 'password']

export const validationSchema = yup.object().shape({
  name: yup.string().min(2, 'min 2 symbols').required('Required'),
  email: yup.string().email('Not valid email').required('Required'),
  password: yup.string().min(6, 'min 6').required('Required')
})

export const initialValues: UserRegistrationData = {
  name: '',
  email: '',
  password: ''
}
