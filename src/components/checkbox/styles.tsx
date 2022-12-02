import styled from 'styled-components'

export const CheckBoxLabel = styled.label`
  display: block;
  position: relative;
  padding: 5px 10px 5px 30px;
`

export const Checkmark = styled.span`
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.gray.gray500};
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    opacity: 0;
    width: 8px;
    height: 14px;
    top: 4px;
    left: 9px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.white};
    border-right: 3px solid ${({ theme }) => theme.colors.white};
    transform: rotate(45deg);
  }
`

export const CheckBoxInput = styled.input.attrs(() => ({ type: 'checkbox' }))`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &:checked {
    & + span {
      background-color: ${({ theme }) => theme.colors.blue.blue600};
      &::after {
        opacity: 1;
      }
    }
  }
`
