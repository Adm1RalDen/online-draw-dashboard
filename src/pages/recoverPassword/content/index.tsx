import { ChevronLeftIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/button'
import { ButtonOutline } from 'components/button-outline'
import { Input } from 'components/input'
import { Heading3, Paragraph } from 'styles/typography/styles'

import { HOME_URL } from 'const/urls'
import { useToastError } from 'hooks/useToastError'
import { useToastSuccess } from 'hooks/useToastSuccess'
import { useRecoverPasswordMutation } from 'store/rtk/services/user'

import { getRtkRequestError } from 'utils/getRtkRequestError'

import { SuccessSubmit } from '../success'
import { recoverPasswordValidationSchema } from '../utils'
import { ButtonsWrapper, RecoverPasswordContentWrapper, StyledForm } from './styles'

export const RecoverPasswordContent = () => {
  const [handleResetPassword, { isLoading, isSuccess, error, isError }] =
    useRecoverPasswordMutation()
  const navigate = useNavigate()

  const formik = useFormik({
    validationSchema: recoverPasswordValidationSchema,
    onSubmit: handleResetPassword,
    initialValues: {
      email: ''
    }
  })

  const handleBackNavigate = () => navigate(HOME_URL, { replace: true })

  useToastError(isError, getRtkRequestError(error))
  useToastSuccess(isSuccess, 'Letter was send in your email')

  return (
    <RecoverPasswordContentWrapper>
      {isSuccess ? (
        <SuccessSubmit handleBackNavigate={handleBackNavigate} />
      ) : (
        <StyledForm onSubmit={formik.handleSubmit}>
          <LockClosedIcon width={40} />
          <Heading3>Can`t login?</Heading3>
          <Paragraph>
            Enter your email address and we will send you a link to restore access to your account.
          </Paragraph>
          <Input
            name='email'
            type='email'
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.touched.email && formik.errors.email}
            disabled={isLoading}
          />
          <ButtonsWrapper>
            <ButtonOutline type='button' onClick={handleBackNavigate} disabled={isLoading}>
              <ChevronLeftIcon /> Back
            </ButtonOutline>
            <Button type='submit' disabled={!formik.dirty || !formik.isValid || isLoading}>
              Get link for login
            </Button>
          </ButtonsWrapper>
        </StyledForm>
      )}
    </RecoverPasswordContentWrapper>
  )
}
