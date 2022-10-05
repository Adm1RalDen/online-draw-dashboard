import styled from 'styled-components'

export const InputColor = styled.input`
  -webkit-appearance: none;
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
