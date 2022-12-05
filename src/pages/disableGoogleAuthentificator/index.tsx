import { XMarkIcon } from '@heroicons/react/24/outline'
import { FormikProvider, useFormik } from 'formik'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AbsoluteIconWrapper } from 'components/absolute-icon-wrapper'
import { Button } from 'components/button'
import { Container } from 'components/container'
import { InputField } from 'components/field'
import { Heading2, Heading3, Paragraph } from 'styles/typography/styles'

import SuccessIcon from 'public/assets/success.svg'

import { InputTypes, NotifyType } from 'const/enums'
import { SETTINGS_SECURITY_URL } from 'const/urls'
import { useNotify } from 'hooks/useNotify'
import { useAppDispatch } from 'store'
import { useDisableTwoFAMutation } from 'store/rtk/services/twoFa'
import { Disable2FAData } from 'store/rtk/types'
import { userIsUse2FaSelector } from 'store/selectors/user.selector'
import { disable2Fa } from 'store/slices/user.slice'

import { checkForNumbersInString } from 'utils/checkForNumbersInString'
import { cryptoSha256 } from 'utils/cryptoPassord'
import { getRtkRequestError } from 'utils/getRtkRequestError'

import { initialValues } from './const'
import {
  DisableAuthentificatorForm,
  DisableAuthentificatorSection,
  DisableAuthentificatorWrapper,
  SuccessIconWrapper,
  SuccessWrapper
} from './styles'
import { validationSchema } from './utils'

export const DisableAuthentificator = () => {
  const [handleDisable2Fa, { isLoading, isError, error, isSuccess }] = useDisableTwoFAMutation()
  const isUse2FA = useSelector(userIsUse2FaSelector)

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: handleSubmit
  })

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useNotify(isError, getRtkRequestError(error), NotifyType.ERROR)

  useEffect(() => {
    if (isSuccess) {
      dispatch(disable2Fa())
    }
  }, [dispatch, isSuccess])

  function handleSubmit({ password, secure2FACode }: Disable2FAData) {
    const hash_password = cryptoSha256(password)
    handleDisable2Fa({ secure2FACode, password: hash_password })
  }

  const handleNavigate = () => navigate(SETTINGS_SECURITY_URL, { replace: true })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checkForNumbersInString(e.target.value, 6)) {
      formik.handleChange(e)
    }
  }

  return (
    <DisableAuthentificatorSection>
      <Container>
        <DisableAuthentificatorWrapper>
          {isSuccess || !isUse2FA ? (
            <SuccessWrapper>
              <Heading3>Google Authentificator was succesfully disabled </Heading3>
              <SuccessIconWrapper>
                <SuccessIcon />
              </SuccessIconWrapper>
              <Paragraph>You can enable google authentificator on settings page</Paragraph>
              <Button onClick={handleNavigate}>Back to settings</Button>
            </SuccessWrapper>
          ) : (
            <FormikProvider value={formik}>
              <Heading2>Disable Google Authentificator</Heading2>

              <DisableAuthentificatorForm onSubmit={formik.handleSubmit}>
                <InputField
                  label='Password'
                  name='password'
                  type={InputTypes.PASSWORD}
                  disabled={isLoading}
                  value={formik.values.password}
                />
                <InputField
                  label='Code from Authentificator'
                  name='secure2FACode'
                  type={InputTypes.TEXT}
                  disabled={isLoading}
                  value={formik.values.secure2FACode}
                  onChange={handleChange}
                />
                <Button type='submit' disabled={(!formik.dirty && !formik.isValid) || isLoading}>
                  {isLoading ? 'Loading...' : 'Submit'}
                </Button>

                <AbsoluteIconWrapper>
                  <XMarkIcon onClick={handleNavigate} />
                </AbsoluteIconWrapper>
              </DisableAuthentificatorForm>
            </FormikProvider>
          )}
        </DisableAuthentificatorWrapper>
      </Container>
    </DisableAuthentificatorSection>
  )
}
