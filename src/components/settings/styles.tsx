import styled from 'styled-components'

import { Input as DefaultInput } from 'components/input'

const StyledSettings = styled.div`
  grid-area: settings;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.aqua};
  gap: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

const Input = styled(DefaultInput)`
  width: 60px;
  padding: 0;
  &[type='number'] {
    border: none;
    padding: 0px 5px 0px 5px;
  }
`

export { StyledSettings, Input }
