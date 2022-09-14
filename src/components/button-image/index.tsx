import styled from 'styled-components'

import { Button } from 'components/button'

export const ButtonImage = styled(Button)`
  width: 40px;
  height: 40px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: center center;
  border: none;

  &:hover {
    background-color: ${(p) => p.theme.colors.greenBackground};
  }
`
