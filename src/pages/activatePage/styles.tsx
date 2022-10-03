import styled from 'styled-components'

const ActivationPageSection = styled.section`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 10px;
  }
  & a {
    font-size: 20px;
  }

  @media screen and (max-width: 400px) {
    padding: 5px;
  }
`
export { ActivationPageSection }
