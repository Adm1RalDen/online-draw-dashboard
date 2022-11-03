import styled from 'styled-components'

export const GoogleLoginWrapper = styled.div`
  margin-top: 10px;
`
export const GoogleLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  width: inherit;
  margin-top: 15px;
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  &:active {
    background-color: ${({ theme }) => theme.colors.whiteGray};
  }
`
