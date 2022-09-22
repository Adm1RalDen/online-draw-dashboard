import styled from 'styled-components'

import { Button } from 'components/button'

const ActivationPageSection = styled.section`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > h1 {
    color: #fff;
  }

  @media screen and (max-width: 400px) {
    padding: 5px;
  }
`
const ActivationPageWrapper = styled.div`
  border: 2px solid #fff;
  max-width: 400px;
  max-height: 300px;
  border-radius: 5px;
  color: #fff;
  padding: 10px 10px 20px 10px;
  & > h1 {
    font-size: 25px;
    text-align: center;
  }
  & > h3 {
    text-align: center;
    font-weight: 300;
  }
`
const ConfirmButton = styled(Button)`
  display: block;
  margin: 20px auto 0px auto;
`
export { ActivationPageSection, ActivationPageWrapper, ConfirmButton }
