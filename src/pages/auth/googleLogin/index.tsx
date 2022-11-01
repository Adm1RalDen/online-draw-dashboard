import { API_URL } from 'api/const'

import GoogleIcon from 'public/assets/google-logo.svg'

import { GoogleLink } from './styles'

export const GoogleLoginComponent = () => (
  <GoogleLink href={`${API_URL}/auth/google`}>
    <GoogleIcon />
    Sign in with Google
  </GoogleLink>
)
