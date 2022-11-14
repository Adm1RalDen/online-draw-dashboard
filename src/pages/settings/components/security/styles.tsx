import styled from 'styled-components'

import { Input } from 'components/input'

export const ChangeWrapper = styled.section`
  margin-bottom: 30px;

  & > h3 {
    font-weight: 300;
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray};
  }
`

export const ChangePasswordWrapper = styled(ChangeWrapper)`
  & > form > button {
    margin-top: 10px;
  }
`

export const ChangeTwoFaWrapper = styled(ChangeWrapper)`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;

    & > button {
      margin-top: 10px;
      width: 200px;
    }
  }
`

export const ChangePasswordField = styled(Input)`
  display: block;
  height: 30px;
  max-width: 300px;
  margin-bottom: 10px;
`
