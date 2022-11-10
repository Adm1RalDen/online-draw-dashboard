import * as yup from 'yup'

import { ErrorMessages } from 'const/enums'

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Not valid email').required(ErrorMessages.REQUIRED),
  password: yup.string().min(6, 'min 6').required(ErrorMessages.REQUIRED)
})

export const registrationValidationSchema = yup.object().shape({
  name: yup.string().min(2, 'min 2 symbols').required(ErrorMessages.REQUIRED),
  email: yup.string().email('Not valid email').required(ErrorMessages.REQUIRED),
  password: yup.string().min(6, 'min 6').required(ErrorMessages.REQUIRED)
})
