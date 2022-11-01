import styled from 'styled-components'

import { Button } from 'components/button'

const AuthentificatorStepsWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid white;
  border-radius: 10px;

  padding: 10px;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > h4,
  p,
  span {
    text-align: center;
  }
`
const AuthentificatorButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  & > button:first-child {
    width: 60px;
  }
`

const AuthentificatorNextButton = styled(Button)`
  width: 120px;
  color: ${({ theme }) => theme.colors.white};
`
export { AuthentificatorStepsWrapper, AuthentificatorButtonsWrapper, AuthentificatorNextButton }
