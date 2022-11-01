import { useNavigate } from 'react-router-dom'

import { Button } from 'components/button'
import { Label } from 'components/label'

import { DISABLE_GOOGLE_AUTH, ENABLE_GOOGLE_AUTH } from 'const/urls'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { PrivacyMainFieldset, PrivacyMainInput } from './styles'

export const PrivacyMain = () => {
  const navigate = useNavigate()
  const { isUse2FA } = useAppSelector(userDataSelector)

  const handleNavigateEnable2FA = () => navigate(ENABLE_GOOGLE_AUTH)
  const handleNavigateDisable2FA = () => navigate(DISABLE_GOOGLE_AUTH)

  return (
    <form>
      <PrivacyMainFieldset>
        <Label>Email</Label>
        <PrivacyMainInput type='email' name='email' id='email' />
      </PrivacyMainFieldset>

      <PrivacyMainFieldset>
        <Label>Password</Label>
        <PrivacyMainInput type='password' name='password' id='password' />
      </PrivacyMainFieldset>

      <PrivacyMainFieldset>
        <Label htmlFor='twoFA'>Google authentification</Label>
        {isUse2FA ? (
          <Button onClick={handleNavigateDisable2FA}>Disable</Button>
        ) : (
          <Button onClick={handleNavigateEnable2FA}>Enable</Button>
        )}
      </PrivacyMainFieldset>
    </form>
  )
}
