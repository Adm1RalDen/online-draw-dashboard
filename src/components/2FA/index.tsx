import { XMarkIcon } from '@heroicons/react/24/solid'
import { FC, useEffect, useState } from 'react'

import { Loader } from 'components/loader'
import { TextWrapper } from 'components/textWrapper'
import { Paragraph } from 'styles/typography/styles'

import { ErrorMessages, KeysCodes } from 'const/enums'
import { useAppDispatch, useAppSelector } from 'store'
import { useConfirmUser2FAMutation } from 'store/rtk/services/twoFa'
import { twoFaSelector } from 'store/selectors/twoFa.selector'
import { decreseAttemptsLeftCountAction } from 'store/slices/twoFa.slice'

import { checkForNumbersInString } from 'utils/checkForNumbersInString'
import { noopFunction } from 'utils/noop'

import { FunctionWithParams } from 'types'
import { AuthResponse } from 'types/user'

import {
  User2FAButton,
  User2FACloseModalButton,
  User2FAComponentBlock,
  User2FAErrorText,
  User2FAInput,
  User2FASuccessText,
  User2FAWrapper
} from './styles'

interface User2FAComponentProps {
  userId: string
  handleCloseModal: VoidFunction
  onSuccessCallback: FunctionWithParams<AuthResponse>
  onErrorCallback?: FunctionWithParams<string>
}

export const User2FAComponent: FC<User2FAComponentProps> = ({
  userId,
  onSuccessCallback,
  handleCloseModal,
  onErrorCallback = noopFunction
}) => {
  const { attemptsLeftCount } = useAppSelector(twoFaSelector)
  const [secure2FACode, setSecure2FACode] = useState('')
  const [submit2faData, { isLoading, isError, isSuccess, data }] = useConfirmUser2FAMutation()
  const dispatch = useAppDispatch()

  const isDisabledSubmit = secure2FACode.length < 6 || isSuccess

  useEffect(() => {
    if (attemptsLeftCount <= 0) {
      handleCloseModal()
      onErrorCallback(ErrorMessages.FAILURE_AUTH_ERROR)
    }
  }, [attemptsLeftCount, onErrorCallback, handleCloseModal])

  useEffect(() => {
    if (isError) {
      dispatch(decreseAttemptsLeftCountAction())
    }
  }, [isError, dispatch])

  useEffect(() => {
    let timerId: NodeJS.Timeout

    if (isSuccess && data) {
      timerId = setTimeout(() => {
        onSuccessCallback(data)
      }, 2000)
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [isSuccess, onSuccessCallback, data])

  const handleSubmit = () => submit2faData({ secure2FACode, userId })

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (secure2FACode.length === 6 && e.code === KeysCodes.ENTER) {
      handleSubmit()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checkForNumbersInString(e.target.value, 6) || !e.target.value) {
      setSecure2FACode(e.target.value)
    }
  }

  return (
    <User2FAComponentBlock>
      <Paragraph>Please enter code from your Google Authentificator </Paragraph>
      <User2FAWrapper>
        <User2FAInput
          type='text'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={secure2FACode}
          autoFocus
        />
        {isLoading ? (
          <Loader type='solid' color='black' />
        ) : (
          <User2FAButton onClick={handleSubmit} disabled={isDisabledSubmit}>
            Send
          </User2FAButton>
        )}
      </User2FAWrapper>

      <TextWrapper>
        {isSuccess && <User2FASuccessText>Success</User2FASuccessText>}
        {isError && (
          <User2FAErrorText>{`Invalid code you have ${attemptsLeftCount} attempts`}</User2FAErrorText>
        )}
      </TextWrapper>

      <User2FACloseModalButton onClick={handleCloseModal} disabled={isLoading || isSuccess}>
        <XMarkIcon />
      </User2FACloseModalButton>
    </User2FAComponentBlock>
  )
}
