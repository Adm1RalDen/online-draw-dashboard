import * as yup from 'yup'

export const resetPasswordValidationSchema = yup.object().shape({
  password: yup.string().min(6, 'Min 6 symbols').required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), 'Passwords is not matches'])
    .required('Required')
})
