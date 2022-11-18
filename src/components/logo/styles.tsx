import styled from 'styled-components'

import LogoIcon from 'public/assets/logo.svg'

export const StyledLogo = styled(LogoIcon)`
  display: inline-block;
  position: relative;
  top: 10px;
  fill: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
  margin-right: ${({ theme }) => theme.spacing.s};
`
