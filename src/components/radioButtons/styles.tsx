import styled from 'styled-components'

const RadioButtonsWrapper = styled.div``

const StyledRadioButton = styled.div`
  display: inline-block;
  width: max-content;
  margin-right: 10px;
`

const Input = styled.input.attrs(() => ({ type: 'radio' }))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span {
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &:checked ~ span:after {
    display: block;
  }
`

const BackgroundCircle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${({ theme }) => theme.colors.whiteGray};
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }

  &:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
  }
`

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.middleUp};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export { RadioButtonsWrapper, StyledRadioButton, Label, Input, BackgroundCircle }