import * as yup from 'yup'

import { ErrorMessages } from 'const/enums'

export const validationSchema = yup.object().shape({
  roomId: yup.string().required(ErrorMessages.REQUIRED)
})
