import { ChevronLeftIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { FormikProvider, useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Button } from 'components/button'
import { ButtonOutline } from 'components/button-outline'
import { InputField } from 'components/field'
import { Loader } from 'components/loader'
import { Heading3, Paragraph } from 'styles/typography/styles'

import { InputTypes, NotifyType } from 'const/enums'
import { HOME_URL } from 'const/urls'
import { useNotify } from 'hooks/useNotify'
import { useResetPasswordMutation } from 'store/rtk/services/user'

import { cryptoSha256 } from 'utils/cryptoPassord'
import { getRtkRequestError } from 'utils/getRtkRequestError'

import { resetPasswordInitialValues } from '../const'
import {
  ResetPasswordButtonsWrapper,
  ResetPasswordContentWrapper,
  ResetPasswordForm
} from '../styles'
import { SuccessReset } from '../success/reset'
import { resetPasswordValidationSchema } from '../utils'

export const ResetPasswordContent = () => {
  const [handleResetPassword, { isLoading, isSuccess, error, isError }] = useResetPasswordMutation()
  const [isReady, setIsReady] = useState(false)

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const formik = useFormik({
    initialValues: resetPasswordInitialValues,
    validationSchema: resetPasswordValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: ({ password, confirmPassword }) =>
      handleResetPassword({
        password: cryptoSha256(password),
        confirmPassword: cryptoSha256(confirmPassword),
        link: searchParams.get('link')
      })
  })

  useEffect(() => {
    const link = searchParams.get('link')

    if (!link) {
      navigate(HOME_URL, { replace: true })
    } else {
      setIsReady(true)
    }
  }, [searchParams, setIsReady, navigate])

  useNotify(isError, getRtkRequestError(error), NotifyType.ERROR)
  useNotify(isSuccess, 'Reset password is successfully', NotifyType.SUCCESS)

  const handleBackNavigate = () => navigate(HOME_URL, { replace: true })

  if (!isReady) return <Loader type='dots' />

  return (
    <ResetPasswordContentWrapper>
      {isSuccess ? (
        <SuccessReset handleBackNavigate={handleBackNavigate} />
      ) : (
        <FormikProvider value={formik}>
          <ResetPasswordForm onSubmit={formik.handleSubmit}>
            <LockClosedIcon width={40} />
            <Heading3>Reset password</Heading3>
            <Paragraph>Create your new password and confirm it</Paragraph>
            <InputField
              name='password'
              type={InputTypes.PASSWORD}
              placeholder='Password'
              value={formik.values.password}
              disabled={isLoading}
            />
            <InputField
              name='confirmPassword'
              type={InputTypes.PASSWORD}
              placeholder='Confirm password'
              value={formik.values.confirmPassword}
              disabled={isLoading}
            />
            <ResetPasswordButtonsWrapper>
              <ButtonOutline type='button' onClick={handleBackNavigate}>
                <ChevronLeftIcon /> Back
              </ButtonOutline>
              <Button type='submit' disabled={!formik.dirty || !formik.isValid || isLoading}>
                Create new password
              </Button>
            </ResetPasswordButtonsWrapper>
          </ResetPasswordForm>
        </FormikProvider>
      )}
    </ResetPasswordContentWrapper>
  )
}
