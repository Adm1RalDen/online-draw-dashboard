import * as yup from 'yup'

import { ErrorMessages } from 'const/enums'

export const resetPasswordValidationSchema = yup.object().shape({
  password: yup.string().min(6, 'Min 6 symbols').required(ErrorMessages.REQUIRED),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), 'Passwords is not matches'])
    .required(ErrorMessages.REQUIRED)
})

export const identifydValidationSchema = yup.object().shape({
  email: yup.string().email().required(ErrorMessages.REQUIRED)
})
