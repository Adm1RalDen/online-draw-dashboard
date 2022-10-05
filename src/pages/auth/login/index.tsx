import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'
import { UserLoginThunk } from 'store/thunks/user/authorization.thunk'
import { RefreshResponse, User2FAData as User2FADataType, UserLoginFormData } from 'types'
import { Portal } from 'utils/portal'

import { User2FAComponent } from 'components/2FA'
import { InputAnimation } from 'components/input-animation'

import { GoogleLoginComponent } from '../googleLogin'
import { AuthButton, Title } from '../styles'
import { AuthorizationFileds, initialValues, onSubmit, validationSchema } from './const'

export const LoginComponent = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(userInfoSelector)
  const [user2FAData, setUser2FAData] = useState<User2FADataType | null>(null)

  const handleCloseModal = () => setUser2FAData(null)
  const onSuccessCallback = (data: RefreshResponse) => dispatch(UserLoginThunk(data))
  const onErrorCallback = (err: string) => toast.error(err)

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data: UserLoginFormData) =>
      onSubmit({
        data,
        dispatch,
        setUser2FAData
      })
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
              label={field[0].toUpperCase() + field.slice(1)}
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
      {user2FAData && (
        <Portal>
          <User2FAComponent
            qrcode={user2FAData.qrcode}
            userId={user2FAData.userId}
            handleCloseModal={handleCloseModal}
            onSuccessCallback={onSuccessCallback}
            onErrorCallback={onErrorCallback}
          />
        </Portal>
      )}
    </>
  )
}
