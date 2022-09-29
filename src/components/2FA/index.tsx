import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Heading2 } from 'styles/typography/styles'
import { User2FAData } from 'types'

import { LittleLoader } from 'components/loaders/littleLoader'

import { handleSend2FA } from './const'
import {
  QrCodeWrapper,
  User2FAButton,
  User2FAComponentBlock,
  User2FAErrorSpan,
  User2FAInput,
  User2FAWrapper
} from './styles'

type Props = {
  user2FAData: User2FAData
  handleCloseModal: VoidFunction
}

export const User2FAComponent: FC<Props> = ({
  user2FAData: { qrcode, userId },
  handleCloseModal
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [attemptCount, setAttempCount] = useState(3)
  const dispatch = useDispatch()

  useEffect(() => {
    if (attemptCount <= 0) {
      handleCloseModal()
    }
  }, [attemptCount, handleCloseModal])
  const handleSend = () =>
    handleSend2FA({ userId, code, dispatch, setIsLoading, setError, setAttempCount })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 6) {
      setCode(e.target.value)
    }
  }

  return (
    <User2FAComponentBlock>
      <QrCodeWrapper>
        <img src={qrcode} />
      </QrCodeWrapper>
      <Heading2>Please scan qrcode and enter your code</Heading2>
      <User2FAWrapper>
        <User2FAInput type='number' onChange={handleChange} value={code} autoFocus={true} />
        <div>
          {isLoading ? (
            <LittleLoader />
          ) : (
            <User2FAButton onClick={handleSend} disabled={code.length < 6}>
              send
            </User2FAButton>
          )}
        </div>
      </User2FAWrapper>
      <User2FAErrorSpan>{error && `${error} you have ${attemptCount} attempts`}</User2FAErrorSpan>
    </User2FAComponentBlock>
  )
}
