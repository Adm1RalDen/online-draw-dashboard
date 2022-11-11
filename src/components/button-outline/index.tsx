import styled from 'styled-components'

export const ButtonOutline = styled.button`
  border-radius: 5px;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  background-color: transparent;
  transition: all 0.3s linear;
  border: none;

  & > svg {
    pointer-events: none;
    display: block;
    margin: auto;
    width: 25px;
    height: 25px;
  }
`
