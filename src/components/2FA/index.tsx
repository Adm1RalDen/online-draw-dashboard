import { XMarkIcon } from '@heroicons/react/24/solid'
import { FC, useEffect, useState } from 'react'
import { Heading2 } from 'styles/typography/styles'
import { FunctionWithParams, SuccessAuthResponse } from 'types'
import { noopFunction } from 'utils/noop'

import { LittleLoader } from 'components/loaders/littleLoader'

import { useConfirmUser2FAMutation } from './api'
import { AUTH_FAILURE_MESSAGE, AUTH_SYMBOLS_ARRAY, BACKSPACE_CODE, ENTER_CODE } from './const'
import {
  QrCodeWrapper,
  User2FAButton,
  User2FACloseModalButton,
  User2FAComponentBlock,
  User2FAErrorSpan,
  User2FAInput,
  User2FASuccessSpan,
  User2FAWrapper
} from './styles'

type Props = {
  qrcode: string
  userId: string
  handleCloseModal: VoidFunction
  onSuccessCallback: FunctionWithParams<SuccessAuthResponse>
  onErrorCallback?: FunctionWithParams<string>
}

export const User2FAComponent: FC<Props> = ({
  qrcode,
  userId,
  onSuccessCallback,
  handleCloseModal,
  onErrorCallback = noopFunction
}) => {
  const [attemptCount, setAttempCount] = useState(3)
  const [code, setCode] = useState('')
  const [submit2faData, { isLoading, isError, isSuccess, data }] = useConfirmUser2FAMutation()

  useEffect(() => {
    if (attemptCount <= 0) {
      handleCloseModal()
      onErrorCallback(AUTH_FAILURE_MESSAGE)
    }
  }, [attemptCount, onErrorCallback, handleCloseModal])

  useEffect(() => {
    if (isError) {
      setAttempCount((prev) => --prev)
    }
  }, [isError])

  useEffect(() => {
    let timerId: NodeJS.Timeout

    if (isSuccess) {
      timerId = setTimeout(() => {
        onSuccessCallback(data as SuccessAuthResponse)
      }, 2000)
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [isSuccess, onSuccessCallback, data])

  const handleSubmit = async () => submit2faData({ code, userId })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (code.length < 6) {
      setCode(e.target.value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e) {
      if (AUTH_SYMBOLS_ARRAY.includes(e.key)) {
        e.preventDefault()
      }

      if (code.length === 6 && e.code === BACKSPACE_CODE) {
        setCode((prev) => prev.slice(0, 5))
        e.preventDefault()
      }

      if (e.code === ENTER_CODE && code.length === 6) {
        handleSubmit()
      }
    }
  }

  return (
    <User2FAComponentBlock>
      <QrCodeWrapper>
        <img src={qrcode} />
      </QrCodeWrapper>
      <Heading2>Please scan qrcode and enter your code</Heading2>
      <User2FAWrapper>
        <User2FAInput
          type='number'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={code}
          autoFocus
        />
        <div>
          {isLoading ? (
            <LittleLoader />
          ) : (
            <User2FAButton onClick={handleSubmit} disabled={code.length < 6 || isSuccess}>
              Send
            </User2FAButton>
          )}
        </div>
      </User2FAWrapper>

      {isSuccess ? (
        <User2FASuccessSpan>Success</User2FASuccessSpan>
      ) : (
        <User2FAErrorSpan>
          {isError && `Invalid code you have ${attemptCount} attempts`}
        </User2FAErrorSpan>
      )}
      <User2FACloseModalButton onClick={handleCloseModal} disabled={isLoading || isSuccess}>
        <XMarkIcon />
      </User2FACloseModalButton>
    </User2FAComponentBlock>
  )
}
