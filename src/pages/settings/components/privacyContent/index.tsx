import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'

import { ButtonOutline } from 'components/button-outline'

import { DownloadAppStep } from './download'
import { EnableStep } from './enable'
import { SaveKeyStep } from './saveKey'
import { ScanQrCodeStep } from './scanQrCode'
import {
  PrivacyAuthentificatorContentWrapper,
  PrivacyButtonsWrapper,
  PrivacyNextButton
} from './styles'
import { SuccessQrCodeStep } from './success'

type Props = {
  currentStep: number
  handleDeclineStep: VoidFunction
  handleIncreaseStep: VoidFunction
}

export const PrivacyAuthentificatorContent: FC<Props> = ({
  currentStep,
  handleDeclineStep,
  handleIncreaseStep
}) => {
  return (
    <PrivacyAuthentificatorContentWrapper>
      {currentStep === 1 && <DownloadAppStep />}
      {currentStep === 2 && <ScanQrCodeStep />}
      {currentStep === 3 && <SaveKeyStep />}
      {currentStep === 4 && <EnableStep />}
      {currentStep === 5 && <SuccessQrCodeStep />}
      <PrivacyButtonsWrapper>
        {currentStep > 1 ? (
          <ButtonOutline onClick={handleDeclineStep}>
            <ChevronLeftIcon />
            Back
          </ButtonOutline>
        ) : (
          <ButtonOutline />
        )}
        <PrivacyNextButton onClick={handleIncreaseStep} disabled={currentStep === 5}>
          next
        </PrivacyNextButton>
      </PrivacyButtonsWrapper>
    </PrivacyAuthentificatorContentWrapper>
  )
}
