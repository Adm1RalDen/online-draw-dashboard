import styled from 'styled-components'

const FailedGoogleAuthPageSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

export { FailedGoogleAuthPageSection }
