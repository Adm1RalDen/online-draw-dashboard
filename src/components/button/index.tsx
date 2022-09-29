import styled from 'styled-components'

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${(p) => p.theme.colors.aqua};
  font-weight: 400;
  color: ${(p) => p.theme.colors.white};
  border-radius: 5px;
  transition: all 0.3s linear;
  border: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:disabled {
    background-color: ${(p) => p.theme.colors.darkAqua};
    cursor: no-drop;
  }

  &:valid:hover {
    background-color: ${(p) => p.theme.colors.lightAqua};
  }
`
