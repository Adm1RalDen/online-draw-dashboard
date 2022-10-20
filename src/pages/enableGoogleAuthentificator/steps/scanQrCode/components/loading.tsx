import { LittleLoader } from 'components/loaders/littleLoader'

import { ScanQrCodeLoaderWrapper } from '../styles'

export const ScanQrCodeStepLoading = () => (
  <ScanQrCodeLoaderWrapper>
    <LittleLoader />
  </ScanQrCodeLoaderWrapper>
)
