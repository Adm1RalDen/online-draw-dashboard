import * as yup from 'yup'

export const initialValues = {
  emailCode: '',
  secure2FACode: ''
}

export const validationSchema = yup.object().shape({
  emailCode: yup.string().required('Required'),
  secure2FACode: yup.number().required('Required')
})
