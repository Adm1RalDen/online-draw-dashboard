import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'
import { userRegistrationThunk } from 'store/thunks/user/authorization.thunk'
import { UserRegistrationData } from 'types'
import { cryptoSha256 } from 'utils/cryptoPassord'
import { setInputTypes } from 'utils/setInputTypes'

import { InputAnimation } from 'components/input-animation'

import { AuthButton, Title } from '../styles'
import { RegistrationFileds, initialValues, validationSchema } from './const'

export const RegistrationComponent = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(userInfoSelector)

  const handleSubmit = (data: UserRegistrationData) => {
    const password = cryptoSha256(data.password)
    dispatch(userRegistrationThunk({ ...data, password }))
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  })

  return (
    <>
      <div>
        <Title>Registration</Title>
        <form onSubmit={formik.handleSubmit}>
          {RegistrationFileds.map((field) => (
            <InputAnimation
              key={field}
              margin='5px 0px 0px 0px'
              label={field[0].toUpperCase() + field.slice(1)}
              name={field}
              type={setInputTypes(field)}
              value={formik.values[field as keyof UserRegistrationData]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors[field as keyof UserRegistrationData] &&
                formik.touched[field as keyof UserRegistrationData]
                  ? formik.errors[field as keyof UserRegistrationData]
                  : ''
              }
            />
          ))}
          <AuthButton disabled={!formik.isValid || isLoading}>Send</AuthButton>
        </form>
      </div>
    </>
  )
}
