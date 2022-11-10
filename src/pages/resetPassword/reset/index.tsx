import { ChevronLeftIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Button } from 'components/button'
import { ButtonOutline } from 'components/button-outline'
import { Input } from 'components/input'
import { Loader } from 'components/loader'
import { Heading3, Paragraph } from 'styles/typography/styles'

import { HOME_URL } from 'const/urls'
import { useToastError } from 'hooks/useToastError'
import { useToastSuccess } from 'hooks/useToastSuccess'
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

  useToastError(isError, getRtkRequestError(error))
  useToastSuccess(isSuccess, 'Reset password is successfully')

  const handleBackNavigate = () => navigate(HOME_URL, { replace: true })

  if (!isReady) return <Loader type='dots' />

  return (
    <ResetPasswordContentWrapper>
      {isSuccess ? (
        <SuccessReset handleBackNavigate={handleBackNavigate} />
      ) : (
        <ResetPasswordForm onSubmit={formik.handleSubmit}>
          <LockClosedIcon width={40} />
          <Heading3>Reset password</Heading3>
          <Paragraph>Create your new password and confirm it</Paragraph>
          <Input
            name='password'
            type='password'
            placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.touched.password && formik.errors.password}
            disabled={isLoading}
          />
          <Input
            name='confirmPassword'
            type='password'
            placeholder='Confirm password'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
      )}
    </ResetPasswordContentWrapper>
  )
}
