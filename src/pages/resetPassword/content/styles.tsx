import styled from 'styled-components'

export const ResetPasswordContentWrapper = styled.div`
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

export const ResetPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 15px;
`

export const ResetPasswordButtonsWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  gap: 15px;
  align-items: center;
`
