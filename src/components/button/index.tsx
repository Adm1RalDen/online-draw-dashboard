import styled from 'styled-components'

export const Button = styled.button`
  padding: 7px 20px;
  background-color: ${(p) => p.theme.colors.teal.teal900};
  font-weight: 400;
  color: ${(p) => p.theme.colors.white};
  border-radius: 5px;
  transition: all 0.3s linear;
  border: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:not([disabled]):hover {
    background-color: ${(p) => p.theme.colors.teal.teal900};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.cyan.cyan900};
    cursor: auto;
  }
`
