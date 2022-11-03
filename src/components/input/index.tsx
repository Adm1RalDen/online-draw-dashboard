import styled, { css } from 'styled-components'

import { StyledInputProps } from './types'

export const Input = styled.input<StyledInputProps>`
  width: 100%;
  height: 40px;
  padding: 0px 30px 0px 10px;
  border-radius: 2px;
  background-color: ${(p) => p.theme.colors.white};
  border: 2px solid ${(p) => p.theme.colors.light_gray};

  &:disabled {
    cursor: no-drop;
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
      outline: ${({ theme }) => theme.colors.red};
      caret-color: ${({ theme }) => theme.colors.red};

      &::placeholder {
        color: ${({ theme }) => theme.colors.red};
      }
    `}
`
