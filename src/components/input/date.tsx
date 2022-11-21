import styled from 'styled-components'

import { Input } from './index'

export const InputDate = styled(Input).attrs(() => ({ type: 'date' }))`
  width: 150px;
  padding-right: ${({ theme }) => theme.spacing.s};
  cursor: pointer;
`
