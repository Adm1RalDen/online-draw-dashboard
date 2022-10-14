import { useNavigate } from 'react-router-dom'

import { Button } from 'components/button'
import { Label } from 'components/label'

import { PrivacyMainFieldset, PrivacyMainInput } from './styles'

export const PrivacyMain = () => {
  const navigate = useNavigate()

  const handleNavigate = () => navigate('/settings/privacy&security/enable-google-authentificator')

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
        <Button onClick={handleNavigate}>Enable</Button>
      </PrivacyMainFieldset>
    </form>
  )
}
