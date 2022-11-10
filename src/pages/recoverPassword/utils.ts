import * as yup from 'yup'

export const recoverPasswordValidationSchema = yup.object().shape({
  email: yup.string().email().required('Required')
})
