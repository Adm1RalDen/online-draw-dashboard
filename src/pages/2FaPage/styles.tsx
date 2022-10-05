import styled from 'styled-components'

const TwoFactorpageSection = styled.section`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    color: ${({ theme }) => theme.colors.white};
    margin: 5px 0px;
  }
  & a {
    font-size: 20px;
    font-weight: 400;
  }
`
export { TwoFactorpageSection }
