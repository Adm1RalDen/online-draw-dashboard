import { FormikProvider, useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { User2FAComponent } from 'components/2FA'
import { AnimatedInputField } from 'components/animatedInputField'

import { RESET_PASSWORD_URL } from 'const/urls'
import { useAppDispatch, useAppSelector } from 'store'
import { userDataSelector, userInfoSelector } from 'store/selectors/user.selector'
import { setAttemptsLeftCountAction } from 'store/slices/twoFa.slice'
import { cancelUser2faAction } from 'store/slices/user.slice'
import { loginThunk, saveUserDataThunk } from 'store/thunks/user/authorization.thunk'

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'
import { Portal } from 'utils/portal'

import { AuthResponse } from 'types'

import { GoogleLoginComponent } from '../googleLogin'
import { AuthButton, Title } from '../styles'
import { loginValidationSchema } from '../utils'
import { LoginFileds, initialValues } from './const'

export const LoginComponent = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(userInfoSelector)
  const { id, isUse2FA } = useAppSelector(userDataSelector)

  const onSuccessCallback = (data: AuthResponse) => dispatch(saveUserDataThunk(data))
  const onErrorCallback = (err: string) => toast.error(err)
  const handleCloseModal = () => dispatch(cancelUser2faAction())

  const setAttemptsLeftCount = (count: number) => dispatch(setAttemptsLeftCountAction(count))

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (data) => dispatch(loginThunk({ ...data, setAttemptsLeftCount }))
  })

  return (
    <>
      <Title>Login</Title>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          {LoginFileds.map((field) => (
            <AnimatedInputField
              key={field}
              label={capitalizeFirstLetter(field)}
              name={field}
              type={field}
              disabled={isLoading}
            />
          ))}
          <Link to={RESET_PASSWORD_URL}>Forgot password</Link>
          <GoogleLoginComponent />
          <AuthButton disabled={!formik.isValid || isLoading}>Sing in</AuthButton>
        </form>
      </FormikProvider>
      {isUse2FA && (
        <Portal>
          <User2FAComponent
            userId={id}
            handleCloseModal={handleCloseModal}
            onSuccessCallback={onSuccessCallback}
            onErrorCallback={onErrorCallback}
          />
        </Portal>
      )}
    </>
  )
}
