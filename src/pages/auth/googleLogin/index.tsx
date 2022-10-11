/* eslint-disable-next-line */
import GoogleIcon from 'public/assets/google-logo.svg'

import { GOOGLE_LINK_HREF, GOOGLE_LINK_TEXT } from './const'
import { GoogleLink, GoogleLoginWrapper } from './styles'

export const GoogleLoginComponent = () => (
  <GoogleLoginWrapper>
    <GoogleLink href={GOOGLE_LINK_HREF}>
      <GoogleIcon />
      {GOOGLE_LINK_TEXT}
    </GoogleLink>
  </GoogleLoginWrapper>
)
