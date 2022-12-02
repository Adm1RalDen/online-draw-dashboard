import styled from 'styled-components'

import { ButtonOutline } from 'components/button-outline'
import { Paragraph } from 'styles/typography/styles'

export const AuthParagraph = styled(Paragraph)`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.white};
`

export const AuthButton = styled(ButtonOutline)`
  display: inline-flex;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.blue.blue600};
`
