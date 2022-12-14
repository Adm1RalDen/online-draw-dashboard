import styled from 'styled-components'

export const DisableAuthentificatorSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.greenBackground};
  min-height: 100vh;
`

export const DisableAuthentificatorWrapper = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  padding: ${({ theme: { spacing } }) => `${spacing.lg} ${spacing.s}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const SuccessWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`

export const SuccessIconWrapper = styled.div`
  & > svg {
    width: 50px;
    height: 50px;
  }
`
