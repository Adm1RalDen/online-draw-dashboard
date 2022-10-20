import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ErrorMessages } from 'const/enums'
import { FC, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAppSelector } from 'store'
import { useCreateTwoFAQuery } from 'store/rtk/api'
import { twoFaSelector } from 'store/selectors/twoFa.selector'
import { Heading4, Paragraph, Span } from 'styles/typography/styles'

import { ButtonOutline } from 'components/button-outline'

import { AuthentificatorButtonsWrapper, AuthentificatorNextButton } from '../styles'
import { StepsProps } from '../types'
import { ScanQrCodeStepLoading } from './components/loading'
import { ScanQrCodeStepSuccess } from './components/success'

export const ScanQrCodeStep: FC<StepsProps> = ({ handleDeclineStep, handleIncreaseStep }) => {
  const { qrcode, secretKey, error } = useAppSelector(twoFaSelector)
  const { isLoading } = useCreateTwoFAQuery(undefined, {
    skip: !!((qrcode && secretKey) || error)
  })

  useEffect(() => {
    if (error) {
      toast.error(ErrorMessages.OCCURED_ERROR)
    }
  }, [error])

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
        <ButtonOutline onClick={handleDeclineStep}>
          <ChevronLeftIcon />
          back
        </ButtonOutline>
        <AuthentificatorNextButton onClick={handleIncreaseStep} disabled={!qrcode && !secretKey}>
          next
        </AuthentificatorNextButton>
      </AuthentificatorButtonsWrapper>
    </>
  )
}
