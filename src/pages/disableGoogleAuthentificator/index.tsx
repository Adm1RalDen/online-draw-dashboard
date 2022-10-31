import { SETTINGS_URL } from 'const/urls'
import { useFormik } from 'formik'
import SuccessIcon from 'public/assets/success.svg'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDisableTwoFAMutation } from 'store/rtk/services/twoFa'
import { Disable2FAData } from 'store/rtk/types'
import { userDataSelector } from 'store/selectors/user.selector'
import { Heading2, Heading3, Paragraph } from 'styles/typography/styles'
import { checkForNumbersInString } from 'utils/checkForNumbersInString'
import { cryptoSha256 } from 'utils/cryptoPassord'
import { toastRtkRequestError } from 'utils/toastRtkRequestError'

import { Button } from 'components/button'
import { Container } from 'components/container'
import { Input } from 'components/input'
import { Label } from 'components/label'

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
  const [submitDisable2Fa, { isLoading, isError, error, isSuccess }] = useDisableTwoFAMutation()
  const { isUse2FA } = useSelector(userDataSelector)
  const navigate = useNavigate()

  const handleSubmit = ({ password, secure2FACode }: Disable2FAData) => {
    const hash_password = cryptoSha256(password)
    submitDisable2Fa({ secure2FACode, password: hash_password })
  }

  useEffect(() => {
    if (!isUse2FA) {
      navigate(SETTINGS_URL)
    }
  }, [navigate, isUse2FA])

  useEffect(() => {
    if (isError) {
      toastRtkRequestError(error)
    }
  }, [isError, error])

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  })

  const handleNavigate = () => navigate(SETTINGS_URL)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (checkForNumbersInString(e.target.value, 6)) {
      formik.handleChange(e)
    }
  }

  if (!isUse2FA) return null

  return (
    <DisableAuthentificatorSection>
      <Container>
        <DisableAuthentificatorWrapper>
          {isSuccess ? (
            <SuccessWrapper>
              <Heading3>Google Authentificator was succesfully disabled </Heading3>
              <SuccessIconWrapper>
                <SuccessIcon />
              </SuccessIconWrapper>
              <Paragraph>you can enable google authentificator on settings page</Paragraph>
              <Button onClick={handleNavigate}>Back to settings</Button>
            </SuccessWrapper>
          ) : (
            <>
              <Heading2>Disable Google Authentificator</Heading2>
              <DisableAuthentificatorForm onSubmit={formik.handleSubmit}>
                <Label>Password</Label>
                <Input
                  name='password'
                  type='password'
                  disabled={isLoading}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  isError={formik.touched.password && formik.errors.password}
                />
                <Label>Code from Authentificator</Label>
                <Input
                  name='secure2FACode'
                  type='text'
                  disabled={isLoading}
                  value={formik.values.secure2FACode}
                  onChange={handleChange}
                  isError={formik.touched.secure2FACode && formik.errors.secure2FACode}
                />
                <Button type='submit' disabled={(!formik.dirty && !formik.isValid) || isLoading}>
                  {isLoading ? 'Loading...' : 'Submit'}
                </Button>
              </DisableAuthentificatorForm>
            </>
          )}
        </DisableAuthentificatorWrapper>
      </Container>
    </DisableAuthentificatorSection>
  )
}
