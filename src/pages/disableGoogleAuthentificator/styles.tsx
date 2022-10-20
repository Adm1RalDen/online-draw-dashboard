import styled from 'styled-components'

const DisableAuthentificatorSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.greenBackground};
  min-height: 100vh;
`

const DisableAuthentificatorWrapper = styled.div`
  width: 400px;
  height: 300px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`

const SuccessWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`

const DisableAuthentificatorForm = styled.form`
  padding: 5px;

  & > button {
    margin-top: 15px;
  }
`

const SuccessIconWrapper = styled.div`
  & > svg {
    width: 50px;
    height: 50px;
  }
`

export {
  DisableAuthentificatorWrapper,
  DisableAuthentificatorForm,
  SuccessIconWrapper,
  DisableAuthentificatorSection,
  SuccessWrapper
}
