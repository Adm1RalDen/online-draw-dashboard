import * as yup from 'yup'

import { ErrorMessages } from 'const/enums'

export const validationSchema = yup.object().shape({
  password: yup.string().required(ErrorMessages.REQUIRED),
  secure2FACode: yup.number().required(ErrorMessages.REQUIRED)
})
