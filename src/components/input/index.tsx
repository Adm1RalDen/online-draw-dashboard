import styled, { css } from 'styled-components'

export const Input = styled.input<{ isError?: boolean | string }>`
  width: 100%;
  height: 35px;
  padding: ${({ theme: { spacing } }) => `0 ${spacing.lg} 0 ${spacing.s}`};
  border-radius: 5px;
  background-color: ${(p) => p.theme.colors.white};
  border: 2px solid ${(p) => p.theme.colors.gray.gray500};

  &:disabled {
    border-color: ${({ theme }) => theme.colors.gray.gray300};
    background-color: ${({ theme }) => theme.colors.gray.gray300};
    cursor: no-drop;
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.blue.blue600};
    box-shadow: 0px 0px 2px 3px ${({ theme }) => theme.colors.blue.blue800};
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.colors.red.red600};
      outline: ${({ theme }) => theme.colors.red.red600};
      caret-color: ${({ theme }) => theme.colors.red.red600};

      &::placeholder {
        color: ${({ theme }) => theme.colors.red.red600};
      }
    `}
`
