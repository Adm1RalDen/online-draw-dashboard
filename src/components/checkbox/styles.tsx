import styled from 'styled-components'

const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const CheckBoxLabel = styled.label`
  font-size: 16px;
`
const CheckBoxInput = styled.input.attrs(() => ({ type: 'checkbox' }))`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`
export { CheckBoxInput, CheckBoxWrapper, CheckBoxLabel }
