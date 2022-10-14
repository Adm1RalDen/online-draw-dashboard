import { XMarkIcon } from '@heroicons/react/24/solid'
import { FC, useEffect, useState } from 'react'
import { useConfirmUser2FAMutation } from 'store/rtk/api'
import { Paragraph } from 'styles/typography/styles'
import { AuthResponse, FunctionWithParams } from 'types'
import { noopFunction } from 'utils/noop'

import { LittleLoader } from 'components/loaders/littleLoader'

import { AUTH_FAILURE_MESSAGE } from './const'
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
  onSuccessCallback: FunctionWithParams<AuthResponse>
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
        onSuccessCallback(data as AuthResponse)
      }, 2000)
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [isSuccess, onSuccessCallback, data])

  const handleSubmit = () => submit2faData({ code, userId })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[0-9]{0,6}$/.test(e.target.value) || !e.target.value) {
      setCode(e.target.value)
    }

    e.preventDefault()
  }

  return (
    <User2FAComponentBlock>
      <QrCodeWrapper>
        <img src={qrcode} />
      </QrCodeWrapper>
      <Paragraph>Please scan qrcode and enter your code</Paragraph>
      <User2FAWrapper>
        <User2FAInput type='text' onChange={handleChange} value={code} autoFocus />
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
