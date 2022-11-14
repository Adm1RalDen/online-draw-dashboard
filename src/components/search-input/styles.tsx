import styled from 'styled-components'

import { Input } from 'components/input'

export const StyledSearchInput = styled(Input)`
  width: 100%;
  border-radius: 15px;
  padding-left: 30px;
  height: 35px;
  background-image: url('/assets/search.svg');
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 20px 20px;
  border: 2px solid ${({ theme }) => theme.colors.gray};

  &::placeholder {
    font-size: 14px;
  }
`
