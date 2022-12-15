import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/button'
import { Container } from 'components/container'
import { Heading3, Paragraph } from 'styles/typography/styles'

import SuccessIcon from 'public/assets/success.svg'

import { NotifyType } from 'const/enums'
import { SETTINGS_SECURITY_URL } from 'const/urls'
import { useNotify } from 'hooks/useNotify'
import { useAppDispatch } from 'store'
import { useDisableTwoFAMutation } from 'store/rtk/services/twoFa'
import { userIsUse2FaSelector } from 'store/selectors/user.selector'
import { disable2Fa } from 'store/slices/user.slice'

import { getRtkRequestError } from 'utils/getRtkRequestError'

import { DisableAuthentificatorForm } from './disableForm'
import {
  DisableAuthentificatorSection,
  DisableAuthentificatorWrapper,
  SuccessIconWrapper,
  SuccessWrapper
} from './styles'

export const DisableAuthentificator = () => {
  const [handleDisable2Fa, { isLoading, isError, error, isSuccess }] = useDisableTwoFAMutation()

  const isUse2FA = useSelector(userIsUse2FaSelector)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useNotify(isError, getRtkRequestError(error), NotifyType.ERROR)

  useEffect(() => {
    if (isSuccess) {
      dispatch(disable2Fa())
    }
  }, [dispatch, isSuccess])

  const handleNavigate = () => navigate(SETTINGS_SECURITY_URL, { replace: true })

  return (
    <DisableAuthentificatorSection>
      <Container>
        <DisableAuthentificatorWrapper>
          {!isUse2FA ? (
            <SuccessWrapper>
              <Heading3>Google Authentificator was succesfully disabled </Heading3>
              <SuccessIconWrapper>
                <SuccessIcon />
              </SuccessIconWrapper>
              <Paragraph>You can enable google authentificator on settings page</Paragraph>
              <Button onClick={handleNavigate}>Back to settings</Button>
            </SuccessWrapper>
          ) : (
            <DisableAuthentificatorForm
              handleDisable2Fa={handleDisable2Fa}
              handleNavigate={handleNavigate}
              isLoading={isLoading}
            />
          )}
        </DisableAuthentificatorWrapper>
      </Container>
    </DisableAuthentificatorSection>
  )
}
