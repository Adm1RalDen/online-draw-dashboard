import styled from 'styled-components'

const TwoFactorPageSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    color: ${({ theme }) => theme.colors.white};
    margin: ${({ theme }) => theme.spacing.tiny} 0px;
  }

  & a {
    font-size: ${({ theme }) => theme.fontSizes.middle};
    font-weight: 400;
  }
`
export { TwoFactorPageSection }
