import { SecurityChangePassword } from './changePassword'
import { SecurityChangeTwoFa } from './changeTwoFa'

export const SecuritySettings = () => (
  <>
    <SecurityChangePassword />
    <SecurityChangeTwoFa />
  </>
)
