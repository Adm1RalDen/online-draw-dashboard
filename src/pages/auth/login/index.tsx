import { Form, FormikProvider, useFormik } from 'formik'
import { useCallback } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { User2FAComponent } from 'components/2FA'
import { AnimatedInputField } from 'components/field/animated'

import { ErrorMessages } from 'const/enums'
import { RESET_PASSWORD_URL } from 'const/urls'
import { useAppDispatch, useAppSelector } from 'store'
import {
  userIdSelector,
  userIsLoadingSelector,
  userIsUse2FaSelector
} from 'store/selectors/user.selector'
import { setAttemptsLeftCountAction } from 'store/slices/twoFa.slice'
import { cancelUser2faAction } from 'store/slices/user.slice'
import { loginThunk, saveUserDataThunk } from 'store/thunks/user/authorization.thunk'

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'
import { Portal } from 'utils/portal'

import { AuthResponse } from 'types/user'

import { GoogleLoginComponent } from '../googleLogin'
import { AuthButton, Title } from '../styles'
import { loginValidationSchema } from '../utils'
import { LoginFileds, initialValues } from './const'

export const LoginComponent = () => {
  const dispatch = useAppDispatch()
  const { executeRecaptcha } = useGoogleReCaptcha()

  const isLoading = useAppSelector(userIsLoadingSelector)
  const isUse2FA = useAppSelector(userIsUse2FaSelector)
  const id = useAppSelector(userIdSelector)

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: handleSubmit
  })

  const onSuccessCallback = (data: AuthResponse) => dispatch(saveUserDataThunk(data))
  const handleCloseModal = () => dispatch(cancelUser2faAction())

  const setAttemptsLeftCount = useCallback(
    (count: number) => dispatch(setAttemptsLeftCountAction(count)),
    [dispatch]
  )

  async function handleSubmit() {
    if (!executeRecaptcha) {
      return toast.error(ErrorMessages.INVALID_RECAPTCHA)
    }

    const captcha = await executeRecaptcha('login')

    if (!captcha) {
      return toast.error(ErrorMessages.INVALID_RECAPTCHA)
    }

    dispatch(loginThunk({ ...formik.values, captcha }))
      .unwrap()
      .then((res) => {
        if (res?.isUse2FA) {
          setAttemptsLeftCount(res.attemptsLeftCount)
        }
      })
  }

  return (
    <>
      <Title>Login</Title>
      <FormikProvider value={formik}>
        <Form>
          {LoginFileds.map((field) => (
            <AnimatedInputField
              id={field}
              key={field}
              label={capitalizeFirstLetter(field)}
              name={field}
              type={field}
              disabled={isLoading}
            />
          ))}
          <Link to={RESET_PASSWORD_URL}>Forgot password</Link>
          <GoogleLoginComponent />
          <AuthButton type='submit' disabled={!formik.isValid || isLoading}>
            Sing in
          </AuthButton>
        </Form>
      </FormikProvider>
      {isUse2FA && (
        <Portal>
          <User2FAComponent
            userId={id}
            handleCloseModal={handleCloseModal}
            onSuccessCallback={onSuccessCallback}
            onErrorCallback={toast.error}
          />
        </Portal>
      )}
    </>
  )
}
