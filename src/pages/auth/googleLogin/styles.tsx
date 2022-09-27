import styled from 'styled-components'

const GoogleLoginWrapper = styled.div`
  margin-top: 10px;
`
const GoogleLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  width: inherit;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`
export { GoogleLoginWrapper, GoogleLink }
