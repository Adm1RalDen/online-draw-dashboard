import { XMarkIcon } from '@heroicons/react/24/solid'
import { ErrorMessages, KeysCodes } from 'const/enums'
import { FC, useEffect, useState } from 'react'
import { useConfirmUser2FAMutation } from 'store/rtk/api'
import { Paragraph } from 'styles/typography/styles'
import { AuthResponse, FunctionWithParams } from 'types'
import { digitInputObserver } from 'utils/digitInputObserver'
import { noopFunction } from 'utils/noop'

import { LittleLoader } from 'components/loaders/littleLoader'
import { SpanWrapper } from 'components/spanWrapper'

import {
  User2FAButton,
  User2FACloseModalButton,
  User2FAComponentBlock,
  User2FAErrorSpan,
  User2FAInput,
  User2FASuccessSpan,
  User2FAWrapper
} from './styles'

type Props = {
  userId: string
  handleCloseModal: VoidFunction
  onSuccessCallback: FunctionWithParams<AuthResponse>
  onErrorCallback?: FunctionWithParams<string>
}

export const User2FAComponent: FC<Props> = ({
  userId,
  onSuccessCallback,
  handleCloseModal,
  onErrorCallback = noopFunction
}) => {
  const [attemptLeftCount, setAttemptLeftCount] = useState(3)
  const [secure2FACode, setSecure2FACode] = useState('')
  const [submit2faData, { isLoading, isError, isSuccess, data }] = useConfirmUser2FAMutation()

  useEffect(() => {
    if (attemptLeftCount <= 0) {
      handleCloseModal()
      onErrorCallback(ErrorMessages.FAILURE_AUTH_ERROR)
    }
  }, [attemptLeftCount, onErrorCallback, handleCloseModal])

  useEffect(() => {
    if (isError) {
      setAttemptLeftCount((prev) => --prev)
    }
  }, [isError])

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
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (digitInputObserver(e.target.value, 6) || !e.target.value) {
      setSecure2FACode(e.target.value)
    }

    e.preventDefault()
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
          <LittleLoader />
        ) : (
          <User2FAButton onClick={handleSubmit} disabled={secure2FACode.length < 6 || isSuccess}>
            Send
          </User2FAButton>
        )}
      </User2FAWrapper>

      <SpanWrapper>
        {isSuccess && <User2FASuccessSpan>Success</User2FASuccessSpan>}
        {isError && (
          <User2FAErrorSpan>{`Invalid code you have ${attemptLeftCount} attempts`}</User2FAErrorSpan>
        )}
      </SpanWrapper>

      <User2FACloseModalButton onClick={handleCloseModal} disabled={isLoading || isSuccess}>
        <XMarkIcon />
      </User2FACloseModalButton>
    </User2FAComponentBlock>
  )
}
