import { Loader } from 'components/loader'

import { ScanQrCodeLoaderWrapper } from '../styles'

export const ScanQrCodeStepLoading = () => (
  <ScanQrCodeLoaderWrapper>
    <Loader type='solid' />
  </ScanQrCodeLoaderWrapper>
)
