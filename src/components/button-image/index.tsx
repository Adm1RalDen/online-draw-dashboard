import styled from 'styled-components'

export const ButtonImage = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.aquaMiddle};
  box-shadow: 1px 2px 3px 2px ${({ theme }) => theme.colors.darkAqua};
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
    background-color: ${(p) => p.theme.colors.darkAqua};
    cursor: no-drop;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.aqua};
    box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.colors.white};
  }
`
