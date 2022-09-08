import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'
import { UserRegistrationData } from 'types'
import { Portal } from 'utils/portal'

import { InputAnimation } from 'components/input-animation'
import { Loader } from 'components/loaders/loader'

import { AuthButton, Title } from '../styles'
import {
  RegistrationFileds,
  SetTypesFields,
  initialValues,
  onSubmit,
  validationSchema
} from './const'

export const RegistrationComponent = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(userInfoSelector)
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data: UserRegistrationData) => onSubmit(data, dispatch)
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
              type={SetTypesFields(field)}
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
          <AuthButton disabled={!formik.isValid || !formik.dirty}>Send</AuthButton>
        </form>
      </div>
      {isLoading && (
        <Portal>
          <Loader color='white' />
        </Portal>
      )}
    </>
  )
}
