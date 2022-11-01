import { FC } from 'react'

import { Paragraph } from 'styles/typography/styles'

type Props = {
  qrcode: string
  secretKey: string
}

export const ScanQrCodeStepSuccess: FC<Props> = ({ qrcode, secretKey }) => (
  <>
    <img src={qrcode} alt={secretKey} width={150} height={150} />
    <Paragraph>{secretKey}</Paragraph>
  </>
)
