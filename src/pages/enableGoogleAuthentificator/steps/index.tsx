import { FC } from 'react'

import { DownloadAppStep } from './download'
import { EnableStep } from './enable'
import { SaveKeyStep } from './saveKey'
import { ScanQrCodeStep } from './scanQrCode'
import { AuthentificatorStepsWrapper } from './styles'
import { SuccessQrCodeStep } from './success'
import { StepsProps } from './types'

export const AuthentificatorSteps: FC<StepsProps> = (props) => {
  const handleSetSteps = () => {
    switch (props.currentStep) {
      case 1:
        return <DownloadAppStep {...props} />
      case 2:
        return <ScanQrCodeStep {...props} />
      case 3:
        return <SaveKeyStep {...props} />
      case 4:
        return <EnableStep {...props} />
      case 5:
        return <SuccessQrCodeStep />
      default:
        return <DownloadAppStep {...props} />
    }
  }

  return <AuthentificatorStepsWrapper>{handleSetSteps()}</AuthentificatorStepsWrapper>
}
