import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { User2FAComponent } from 'components/2FA'
import { AnimationInput } from 'components/input-animation'

import { RECOVER_PASSWORD_URL } from 'const/urls'
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
    onSubmit: (data) => dispatch(loginThunk({ ...data, setAttemptsLeftCount }))
  })

  return (
    <>
      <Title>Login</Title>
      <form onSubmit={formik.handleSubmit}>
        {LoginFileds.map((field) => (
          <AnimationInput
            key={field}
            label={capitalizeFirstLetter(field)}
            name={field}
            type={field}
            disabled={isLoading}
            value={formik.values[field]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors[field] && formik.touched[field] ? formik.errors[field] : ''}
          />
        ))}
        <Link to={RECOVER_PASSWORD_URL}>Forgot a password?</Link>
        <GoogleLoginComponent />
        <AuthButton disabled={!formik.isValid || isLoading}>Sing in</AuthButton>
      </form>

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
