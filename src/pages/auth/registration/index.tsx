import { FormikProvider, useFormik } from 'formik'

import { AnimatedInputField } from 'components/animatedInputField'

import { useAppDispatch, useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'
import { userRegistrationThunk } from 'store/thunks/user/authorization.thunk'

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'
import { cryptoSha256 } from 'utils/cryptoPassord'
import { setInputTypes } from 'utils/setInputTypes'

import { UserRegistrationData } from 'types'

import { AuthButton, Title } from '../styles'
import { registrationValidationSchema } from '../utils'
import { RegistrationFileds, initialValues } from './const'

export const RegistrationComponent = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(userInfoSelector)

  const handleSubmit = (data: UserRegistrationData) => {
    const password = cryptoSha256(data.password)
    dispatch(userRegistrationThunk({ ...data, password }))
  }

  const formik = useFormik({
    initialValues,
    validationSchema: registrationValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: handleSubmit
  })

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
          <AuthButton disabled={!formik.isValid || isLoading}>Sign up</AuthButton>
        </form>
      </FormikProvider>
    </>
  )
}
