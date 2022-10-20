import { FC } from 'react'

import { DownloadAppStep } from './download'
import { EnableStep } from './enable'
import { SaveKeyStep } from './saveKey'
import { ScanQrCodeStep } from './scanQrCode'
import { AuthentificatorStepsWrapper } from './styles'
import { SuccessQrCodeStep } from './success'
import { StepsProps } from './types'

export const AuthentificatorSteps: FC<StepsProps> = (stepsProps) => {
  const handleSetSteps = () => {
    switch (stepsProps.currentStep) {
      case 1:
        return <DownloadAppStep {...stepsProps} />
      case 2:
        return <ScanQrCodeStep {...stepsProps} />
      case 3:
        return <SaveKeyStep {...stepsProps} />
      case 4:
        return <EnableStep {...stepsProps} />
      case 5:
        return <SuccessQrCodeStep {...stepsProps} />
      default:
        return <DownloadAppStep {...stepsProps} />
    }
  }

  return <AuthentificatorStepsWrapper>{handleSetSteps()}</AuthentificatorStepsWrapper>
}
