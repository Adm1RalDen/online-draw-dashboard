import styled from 'styled-components'

export const RecoverPasswordContentWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.darkGray};
  width: 350px;
  height: 350px;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const StyledForm = styled.form`
  display: flex;
  height: 100%;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonsWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  gap: 15px;
  align-items: center;
`
