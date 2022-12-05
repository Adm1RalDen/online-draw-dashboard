import styled from 'styled-components'

export const StyledEditButton = styled.button`
  display: flex;
  align-items: center;
  min-width: 60px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s;
  padding: ${({ theme }) => theme.spacing.tiny};
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.whiteSmoke};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
  gap: 5px;

  & > svg {
    width: 20px;
    height: 20px;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.whiteSmoke};
  }
`
