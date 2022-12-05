import * as yup from 'yup'

import { ErrorMessages } from 'const/enums'

export const validationSchema = yup.object().shape({
  emailCode: yup.string().required(ErrorMessages.REQUIRED),
  secure2FACode: yup.string().required(ErrorMessages.REQUIRED)
})
