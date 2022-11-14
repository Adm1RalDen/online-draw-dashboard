import styled from 'styled-components'

import { Heading2 } from 'styles/typography/styles'

export const Heading = styled(Heading2)`
  color: ${({ theme }) => theme.colors.white};

  & > svg {
    display: inline-block;
    position: relative;
    top: 10px;
    fill: ${({ theme }) => theme.colors.white};
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`
