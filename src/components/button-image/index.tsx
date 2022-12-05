import styled from 'styled-components'

export const ButtonImage = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.darkSlateGray};
  box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.colors.lightGreen};
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 5px;
  border: none;

  & > svg {
    pointer-events: none;
    display: block;
    margin: auto;
    color: ${({ theme }) => theme.colors.white};
    width: 30px;
    height: 30px;
  }

  &:disabled {
    background-color: ${(p) => p.theme.colors.darkCyan};
    cursor: no-drop;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.darkSlateGray};
    box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.colors.white};
  }
`
