import styled from 'styled-components'

import { Span } from 'styles/typography/styles'

export const ErrorText = styled(Span)`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.tiny};
  color: ${({ theme }) => theme.colors.red};
  text-align: left;
`
