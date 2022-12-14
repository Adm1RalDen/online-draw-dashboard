import styled from 'styled-components'

export const ColorInput = styled.input.attrs(() => ({ type: 'color' }))`
  appearance: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.white};
  margin: auto;
  border: none;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
  }
`
