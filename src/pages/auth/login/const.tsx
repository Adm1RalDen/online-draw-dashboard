import * as yup from 'yup'

import { UserLoginFormData } from 'types'

export const validationSchema = yup.object().shape({
  email: yup.string().email('Not valid email').required('Required'),
  password: yup.string().min(6, 'min 6').required('Required')
})

export const initialValues: UserLoginFormData = {
  email: '',
  password: ''
}

export const AuthorizationFileds = ['email', 'password']
