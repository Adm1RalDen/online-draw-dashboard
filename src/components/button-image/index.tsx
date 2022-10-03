import styled from 'styled-components'

export const ButtonImage = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.aquaMiddle};
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
`
