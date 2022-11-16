import { themes } from 'styles/themes'
import { Heading2 } from 'styles/typography/styles'

import { StyledLogo } from './styles'

export const Logo = () => (
  <Heading2 color={themes.colors.white}>
    <StyledLogo />
    Draw online
  </Heading2>
)
