import { Form, FormikProvider, useFormik } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { toast } from 'react-toastify'

import { AnimatedInputField } from 'components/field/animated'

import { ErrorMessages } from 'const/enums'
import { useAppDispatch, useAppSelector } from 'store'
import { userIsLoadingSelector } from 'store/selectors/user.selector'
import { userRegistrationThunk } from 'store/thunks/user/authorization.thunk'

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'
import { setInputTypes } from 'utils/setInputTypes'

import { AuthButton, Title } from '../styles'
import { registrationValidationSchema } from '../utils'
import { RegistrationFileds, initialValues } from './const'

export const RegistrationComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector(userIsLoadingSelector)

  const formik = useFormik({
    initialValues,
    validationSchema: registrationValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: handleSubmit
  })

  async function handleSubmit() {
    if (!executeRecaptcha) {
      return toast.error(ErrorMessages.INVALID_RECAPTCHA)
    }

    const captcha = await executeRecaptcha('login')

    if (!captcha) {
      return toast.error(ErrorMessages.INVALID_RECAPTCHA)
    }

    dispatch(userRegistrationThunk({ ...formik.values, captcha }))
  }

  return (
    <>
      <Title>Registration</Title>
      <FormikProvider value={formik}>
        <Form>
          {RegistrationFileds.map((field) => (
            <AnimatedInputField
              id={field}
              key={field}
              name={field}
              label={capitalizeFirstLetter(field)}
              type={setInputTypes(field)}
            />
          ))}
          <AuthButton disabled={!formik.isValid || isLoading} type='submit'>
            Sign up
          </AuthButton>
        </Form>
      </FormikProvider>
    </>
  )
}
