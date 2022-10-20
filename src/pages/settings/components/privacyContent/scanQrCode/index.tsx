import { ErrorMessages } from 'const/enums'
import { useCreateTwoFAQuery } from 'store/rtk/api'
import { Heading4, Paragraph, Span } from 'styles/typography/styles'

import { LittleLoader } from 'components/loaders/littleLoader'

import { ScanQrCodeLoaderWrapper } from './styles'

export const ScanQrCodeStep = () => {
  const { data, isLoading, isError } = useCreateTwoFAQuery()

  return (
    <>
      <Heading4>
        Scan this qrcode in <br /> Google Authentificator
      </Heading4>

      {isLoading ? (
        <ScanQrCodeLoaderWrapper>
          <LittleLoader />
        </ScanQrCodeLoaderWrapper>
      ) : !isError ? (
        <div>
          <img src={data?.qrcode} alt={data?.code} width={150} height={150} />
          <Paragraph>{data?.code}</Paragraph>
        </div>
      ) : (
        <div>
          <Paragraph>{ErrorMessages.OCCURED_ERROR}</Paragraph>
        </div>
      )}

      <Span>
        If you cant to scan this qrcode <br /> enter this code in app
      </Span>
    </>
  )
}
