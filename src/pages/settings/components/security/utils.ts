import * as yup from 'yup'

import { ErrorMessages } from 'const/enums'

export const changePasswordValidationSchema = yup.object().shape({
  oldPassword: yup.string().min(6, 'min 6 symbols').required(ErrorMessages.REQUIRED),
  newPassword: yup.string().min(6, 'min 6 symbols').required(ErrorMessages.REQUIRED),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], ErrorMessages.NOT_MATCHED_PASSWORDS)
    .required(ErrorMessages.REQUIRED)
})
