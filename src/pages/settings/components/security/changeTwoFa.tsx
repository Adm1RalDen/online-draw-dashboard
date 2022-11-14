import { LockClosedIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/button'
import { Heading3, Heading4, Paragraph } from 'styles/typography/styles'

import { DISABLE_GOOGLE_AUTH, ENABLE_GOOGLE_AUTH } from 'const/urls'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { ChangeTwoFaWrapper } from './styles'

export const SecurityChangeTwoFa = () => {
  const navigate = useNavigate()
  const { isUse2FA } = useAppSelector(userDataSelector)

  const handleNavigateEnable2FA = () => navigate(ENABLE_GOOGLE_AUTH)
  const handleNavigateDisable2FA = () => navigate(DISABLE_GOOGLE_AUTH)

  return (
    <ChangeTwoFaWrapper>
      <Heading3>Two-factor authentication</Heading3>

      {isUse2FA ? (
        <div>
          <LockClosedIcon width={30} />
          <Heading4>
            Two factor authentication is enabled yet.
            <br /> You can disable it.
          </Heading4>
          <Paragraph>
            Two-factor authentication adds an additional layer of security to your account <br /> by
            requiring more than just a password to sign in.
          </Paragraph>
          <Button onClick={handleNavigateDisable2FA}>Disable</Button>
        </div>
      ) : (
        <div>
          <LockClosedIcon width={30} />
          <Heading4>Two factor authentication is not enabled yet.</Heading4>
          <Paragraph>
            Two-factor authentication adds an additional layer of security to your account <br /> by
            requiring more than just a password to sign in.
          </Paragraph>
          <Button onClick={handleNavigateEnable2FA}>Enable</Button>
        </div>
      )}
    </ChangeTwoFaWrapper>
  )
}
