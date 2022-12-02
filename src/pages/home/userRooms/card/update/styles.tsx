import styled from 'styled-components'

import { Input } from 'components/input'

const UpdateModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  width: 350px;
  height: 250px;
`

const UpdateModalInput = styled(Input)`
  height: 30px;
  margin-bottom: 5px;
`

const UpdateModalCheckbox = styled(Input)`
  display: block;
  width: 20px;
  height: 20px;
  margin-top: 10px;
`

const UpdateModalForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const UpdateModalButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  & > button {
    flex-basis: 50%;
  }

  & > button:first-child {
    background-color: ${({ theme }) => theme.colors.teal.teal700};
    &:hover {
      background-color: ${({ theme }) => theme.colors.green.green500};
    }
  }
  & > button:last-child {
    background-color: ${({ theme }) => theme.colors.red.red900};
    &:hover {
      background-color: ${({ theme }) => theme.colors.red.red600};
    }
  }
`

export {
  UpdateModalWrapper,
  UpdateModalForm,
  UpdateModalButtonsWrapper,
  UpdateModalInput,
  UpdateModalCheckbox
}
