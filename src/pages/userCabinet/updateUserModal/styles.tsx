import styled from 'styled-components'

import { Input as DefaultInput } from 'components/input'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-top: 5px;
  padding: 7px 10px;
`
const Input = styled(DefaultInput)`
  height: 35px;
  margin-top: 5px;
  border-radius: 5px;
  border: none;
`
const InputWrapper = styled.div`
  position: relative;
`
const UserForm = styled.form`
  min-width: 300px;
  max-width: 1200px;
  overflow-y: auto;
  height: 90vh;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.light_gray};
`

const ButtonWrapper = styled.div`
  display: flex;
`

const AvatarWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`

const RadioButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${({ theme }) => theme.colors.white};
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  gap: 10px;

  & > div {
    padding: 5px;
    border-radius: 10px;
    border: 2px solid ${(p) => p.theme.colors.light_gray};
  }
  & > div > h4 {
    padding: 10px 0px;
  }
`

export { UserForm, ButtonWrapper, RadioButtonsWrapper, AvatarWrapper, InputWrapper, Input, Wrapper }
