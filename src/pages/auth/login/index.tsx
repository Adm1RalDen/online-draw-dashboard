import { useFormik } from 'formik'
import { toast } from 'react-toastify'

import { User2FAComponent } from 'components/2FA'
import { InputAnimation } from 'components/input-animation'

import { useAppDispatch, useAppSelector } from 'store'
import { userDataSelector, userInfoSelector } from 'store/selectors/user.selector'
import { setAttemptsLeftCountAction } from 'store/slices/twoFa.slice'
import { cancelUser2faAction } from 'store/slices/user.slice'
import { loginThunk, saveUserDataThunk } from 'store/thunks/user/authorization.thunk'

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'
import { Portal } from 'utils/portal'

import { AuthResponse, UserLoginFormData } from 'types'

import { GoogleLoginComponent } from '../googleLogin'
import { AuthButton, Title } from '../styles'
import { AuthorizationFileds, initialValues, validationSchema } from './const'

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
    validationSchema,
    onSubmit: (data) => dispatch(loginThunk({ ...data, setAttemptsLeftCount }))
  })

  return (
    <>
      <div>
        <Title>Login</Title>
        <form onSubmit={formik.handleSubmit}>
          {AuthorizationFileds.map((field) => (
            <InputAnimation
              key={field}
              disabled={isLoading}
              margin='5px 0px 0px 0px'
              label={capitalizeFirstLetter(field)}
              name={field}
              type={field}
              value={formik.values[field as keyof UserLoginFormData]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors[field as keyof UserLoginFormData] &&
                formik.touched[field as keyof UserLoginFormData]
                  ? formik.errors[field as keyof UserLoginFormData]
                  : ''
              }
            />
          ))}
          <GoogleLoginComponent />
          <AuthButton disabled={!formik.isValid || isLoading}>Send</AuthButton>
        </form>
      </div>
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
