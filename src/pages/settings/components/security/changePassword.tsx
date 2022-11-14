import { Button } from 'components/button'
import { Label } from 'components/label'
import { Heading3 } from 'styles/typography/styles'

import { ChangePasswordField, ChangePasswordWrapper } from './styles'

export const SecurityChangePassword = () => (
  <ChangePasswordWrapper>
    <Heading3>Change Password</Heading3>
    <form>
      <Label>Old password </Label>
      <ChangePasswordField />

      <Label>New Password</Label>
      <ChangePasswordField />

      <Label>Confirm new password </Label>
      <ChangePasswordField />

      <Button disabled={true}>Update password</Button>
    </form>
  </ChangePasswordWrapper>
)
