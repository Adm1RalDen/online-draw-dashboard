import { FormikProvider, useFormik } from 'formik'
import { useCallback } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { toast } from 'react-toastify'

import { AnimatedInputField } from 'components/field/animated'

import { ErrorMessages } from 'const/enums'
import { useAppDispatch, useAppSelector } from 'store'
import { userIsLoadingSelector } from 'store/selectors/user.selector'
import { userRegistrationThunk } from 'store/thunks/user/authorization.thunk'

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'
import { noopFunction } from 'utils/noop'
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
    onSubmit: noopFunction
  })

  const handleSubmit = useCallback(async () => {
    if (!executeRecaptcha) {
      return toast.error(ErrorMessages.INVALID_RECAPTCHA)
    }

    const captcha = await executeRecaptcha('login')

    if (!captcha) {
      return toast.error(ErrorMessages.INVALID_RECAPTCHA)
    }

    dispatch(userRegistrationThunk({ ...formik.values, captcha }))
  }, [executeRecaptcha, dispatch, formik])

  return (
    <>
      <Title>Registration</Title>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          {RegistrationFileds.map((field) => (
            <AnimatedInputField
              key={field}
              label={capitalizeFirstLetter(field)}
              name={field}
              type={setInputTypes(field)}
              value={formik.values[field]}
            />
          ))}
          <AuthButton disabled={!formik.isValid || isLoading} onClick={handleSubmit} type='button'>
            Sign up
          </AuthButton>
        </form>
      </FormikProvider>
    </>
  )
}
