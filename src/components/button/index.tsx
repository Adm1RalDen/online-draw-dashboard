import styled from 'styled-components'

export const Button = styled.button`
  padding: 7px 20px;
  background-color: ${(p) => p.theme.colors.darkSlateGray};
  font-weight: 400;
  color: ${(p) => p.theme.colors.white};
  border-radius: 5px;
  transition: all 0.3s linear;
  border: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:not([disabled]):hover {
    background-color: ${(p) => p.theme.colors.darkSlateGray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkCyan};
    cursor: auto;
  }
`
