import { LockClosedIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

import {
  SettingsHeading3,
  SettingsPageContantWrapper,
  SettingsPageFlexContainer,
  SettingsSubmitButton
} from 'pages/settings/styles'
import { Heading4, Paragraph } from 'styles/typography/styles'

import { DISABLE_GOOGLE_AUTH, ENABLE_GOOGLE_AUTH } from 'const/urls'
import { useAppSelector } from 'store'
import { userIsUse2FaSelector } from 'store/selectors/user.selector'

export const SecurityChangeTwoFa = () => {
  const navigate = useNavigate()
  const isUse2FA = useAppSelector(userIsUse2FaSelector)

  const handleNavigateEnable2FA = () => navigate(ENABLE_GOOGLE_AUTH)
  const handleNavigateDisable2FA = () => navigate(DISABLE_GOOGLE_AUTH)

  return (
    <SettingsPageContantWrapper>
      <SettingsHeading3>Two-factor authentication</SettingsHeading3>
      <SettingsPageFlexContainer>
        <LockClosedIcon width={30} />
        <Heading4>
          {isUse2FA ? (
            <>
              Two factor authentication has been already enabled. <br /> You can disable it.
            </>
          ) : (
            'Two factor authentication is not enabled yet.'
          )}
        </Heading4>
        <Paragraph>
          Two-factor authentication adds an additional layer of security to your account <br /> by
          requiring more than just a password to sign in.
        </Paragraph>

        {isUse2FA ? (
          <SettingsSubmitButton onClick={handleNavigateDisable2FA}>Disable</SettingsSubmitButton>
        ) : (
          <SettingsSubmitButton onClick={handleNavigateEnable2FA}>Enable</SettingsSubmitButton>
        )}
      </SettingsPageFlexContainer>
    </SettingsPageContantWrapper>
  )
}
