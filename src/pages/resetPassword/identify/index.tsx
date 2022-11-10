import { ChevronLeftIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { FormikProvider, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/button'
import { ButtonOutline } from 'components/button-outline'
import { InputField } from 'components/inputField'
import { Heading3, Paragraph } from 'styles/typography/styles'

import { InputTypes } from 'const/enums'
import { HOME_URL } from 'const/urls'
import { useToastError } from 'hooks/useToastError'
import { useToastSuccess } from 'hooks/useToastSuccess'
import { useRecoverPasswordMutation } from 'store/rtk/services/user'

import { getRtkRequestError } from 'utils/getRtkRequestError'

import { identifyInitialValues } from '../const'
import {
  ResetPasswordButtonsWrapper,
  ResetPasswordContentWrapper,
  ResetPasswordForm
} from '../styles'
import { SuccessIdentify } from '../success/identify'
import { identifydValidationSchema } from '../utils'

export const ResetPasswordIdentify = () => {
  const [handleResetPassword, { isLoading, isSuccess, error, isError }] =
    useRecoverPasswordMutation()
  const navigate = useNavigate()

  const formik = useFormik({
    validationSchema: identifydValidationSchema,
    initialValues: identifyInitialValues,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: handleResetPassword
  })

  const handleBackNavigate = () => navigate(HOME_URL, { replace: true })

  useToastError(isError, getRtkRequestError(error))
  useToastSuccess(isSuccess, 'Letter was send in your email')

  return (
    <ResetPasswordContentWrapper>
      {isSuccess ? (
        <SuccessIdentify handleBackNavigate={handleBackNavigate} />
      ) : (
        <FormikProvider value={formik}>
          <ResetPasswordForm onSubmit={formik.handleSubmit}>
            <LockClosedIcon width={40} />
            <Heading3>Can`t login?</Heading3>
            <Paragraph>
              Enter your email address and we will send you a link to restore access to your
              account.
            </Paragraph>
            <InputField
              name='email'
              type={InputTypes.EMAIL}
              placeholder='Email'
              value={formik.values.email}
              disabled={isLoading}
            />
            <ResetPasswordButtonsWrapper>
              <ButtonOutline type='button' onClick={handleBackNavigate} disabled={isLoading}>
                <ChevronLeftIcon /> Back
              </ButtonOutline>
              <Button type='submit' disabled={!formik.dirty || !formik.isValid || isLoading}>
                Get link for login
              </Button>
            </ResetPasswordButtonsWrapper>
          </ResetPasswordForm>
        </FormikProvider>
      )}
    </ResetPasswordContentWrapper>
  )
}
