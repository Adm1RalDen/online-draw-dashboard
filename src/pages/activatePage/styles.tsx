import styled from 'styled-components'

const ActivationPageSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }

  & a {
    font-size: ${({ theme }) => theme.fontSizes.middle};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    padding: ${({ theme }) => theme.spacing.tiny};
  }
`
export { ActivationPageSection }
