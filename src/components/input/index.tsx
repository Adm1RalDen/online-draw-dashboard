import styled, { css } from 'styled-components'

export const Input = styled.input<{ isError?: boolean | string; maxWidth?: boolean }>`
  ${({ maxWidth }) => maxWidth && 'max-width: 300px'};
  width: 100%;
  height: 35px;
  padding: ${({ theme: { spacing } }) => `0 ${spacing.lg} 0 ${spacing.s}`};
  border-radius: 5px;
  background-color: ${(p) => p.theme.colors.white};
  border: 2px solid ${(p) => p.theme.colors.gray};

  &:disabled {
    border-color: ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: no-drop;
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.royalBlue};
    box-shadow: 0px 0px 2px 3px ${({ theme }) => theme.colors.darkBlue};
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
