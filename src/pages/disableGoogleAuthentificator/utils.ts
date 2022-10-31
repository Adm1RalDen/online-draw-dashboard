import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  password: yup.string().required('Required'),
  secure2FACode: yup.number().required('Required')
})
