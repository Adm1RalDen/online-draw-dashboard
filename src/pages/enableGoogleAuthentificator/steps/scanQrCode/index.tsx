import { FC } from 'react'

import { BackButton } from 'components/backButton'
import { Heading4, Paragraph, Span } from 'styles/typography/styles'

import { ErrorMessages } from 'const/enums'
import { useToastError } from 'hooks/useToastError'
import { useAppSelector } from 'store'
import { useCreateTwoFAQuery } from 'store/rtk/services/twoFa'
import { twoFaSelector } from 'store/selectors/twoFa.selector'

import { AuthentificatorButtonsWrapper, AuthentificatorNextButton } from '../styles'
import { StepsProps } from '../types'
import { ScanQrCodeStepLoading } from './components/loading'
import { ScanQrCodeStepSuccess } from './components/success'

export const ScanQrCodeStep: FC<StepsProps> = ({ handleDeclineStep, handleIncreaseStep }) => {
  const { qrcode, secretKey, error } = useAppSelector(twoFaSelector)
  const { isLoading } = useCreateTwoFAQuery(undefined, {
    skip: !!((qrcode && secretKey) || error)
  })

  useToastError(error)

  return (
    <>
      <Heading4>
        Scan this qrcode in <br /> Google Authentificator
      </Heading4>

      {isLoading && <ScanQrCodeStepLoading />}
      {error && <Paragraph>{ErrorMessages.OCCURED_ERROR}</Paragraph>}
      {qrcode && secretKey && <ScanQrCodeStepSuccess qrcode={qrcode} secretKey={secretKey} />}

      <Span>
        If you cant to scan this qrcode <br /> enter this code in app
      </Span>

      <AuthentificatorButtonsWrapper>
        <BackButton onClick={handleDeclineStep} />
        <AuthentificatorNextButton onClick={handleIncreaseStep} disabled={!qrcode && !secretKey}>
          next
        </AuthentificatorNextButton>
      </AuthentificatorButtonsWrapper>
    </>
  )
}
