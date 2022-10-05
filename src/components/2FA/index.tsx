import { XMarkIcon } from '@heroicons/react/24/solid'
import { FC, useEffect, useState } from 'react'
import { Heading2 } from 'styles/typography/styles'
import { FunctionWithParams, RefreshResponse } from 'types'
import { noopFunction } from 'utils/noop'

import { LittleLoader } from 'components/loaders/littleLoader'

import { handleSend2FA } from './const'
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
  onSuccessCallback: FunctionWithParams<RefreshResponse>
  onErrorCallback?: FunctionWithParams<string>
}

export const User2FAComponent: FC<Props> = ({
  qrcode,
  userId,
  onSuccessCallback,
  handleCloseModal,
  onErrorCallback = noopFunction
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [attemptCount, setAttempCount] = useState(3)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (attemptCount <= 0) {
      handleCloseModal()
      onErrorCallback('Authorization is failure')
    }
  }, [attemptCount, onErrorCallback, handleCloseModal])

  const handleSend = () =>
    handleSend2FA({
      userId,
      code,
      onSuccessCallback,
      setIsLoading,
      setError,
      setAttempCount,
      setIsSuccess
    })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (code.length < 6) {
      setCode(e.target.value)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e) {
      if (['e', '+', '-', '.', ','].includes(e.key)) {
        e.preventDefault()
      }
      if (code.length === 6 && e.code === 'Backspace') {
        setCode((prev) => prev.slice(0, 5))
        e.preventDefault()
      }
      if (e.code === 'Enter' && code.length === 6) {
        handleSend()
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
          autoFocus={true}
        />
        <div>
          {isLoading ? (
            <LittleLoader />
          ) : (
            <User2FAButton onClick={handleSend} disabled={code.length < 6 || isSuccess}>
              send
            </User2FAButton>
          )}
        </div>
      </User2FAWrapper>

      {isSuccess ? (
        <User2FASuccessSpan>Success</User2FASuccessSpan>
      ) : (
        <User2FAErrorSpan>{error && `${error} you have ${attemptCount} attempts`}</User2FAErrorSpan>
      )}
      <User2FACloseModalButton onClick={handleCloseModal}>
        <XMarkIcon />
      </User2FACloseModalButton>
    </User2FAComponentBlock>
  )
}
