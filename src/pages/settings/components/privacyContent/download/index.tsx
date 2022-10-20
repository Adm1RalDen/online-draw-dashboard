import { PLATFORMS } from 'const/enums'
// eslint-disable-next-line import/no-unresolved
import AndroidLogo from 'public/assets/android-logo.svg'
// eslint-disable-next-line import/no-unresolved
import AppleLogo from 'public/assets/apple-logo.svg'
import { useState } from 'react'
import { Heading4, Heading6, Paragraph, Span } from 'styles/typography/styles'

import {
  DownloadStepPlatform,
  DownloadStepPlatformsWrapper,
  DownloadStepQrcodesWrapper
} from './styles'

export const DownloadAppStep = () => {
  const [platform, setPlatform] = useState<PLATFORMS.Apple | PLATFORMS.Android>(PLATFORMS.Apple)

  const changePlatformOnApple = () => setPlatform(PLATFORMS.Apple)
  const changePlatformOnAndroid = () => setPlatform(PLATFORMS.Android)

  return (
    <>
      <Heading4>
        Download and install <br /> Authentificator
      </Heading4>

      <DownloadStepPlatformsWrapper>
        <DownloadStepPlatform
          onClick={changePlatformOnApple}
          isActive={platform === PLATFORMS.Apple}
        >
          <AppleLogo />
          <Heading6>App Store</Heading6>
        </DownloadStepPlatform>
        <DownloadStepPlatform
          onClick={changePlatformOnAndroid}
          isActive={platform === PLATFORMS.Android}
        >
          <AndroidLogo />
          <Heading6>Play Market</Heading6>
        </DownloadStepPlatform>
      </DownloadStepPlatformsWrapper>

      <DownloadStepQrcodesWrapper>
        {platform === PLATFORMS.Android ? (
          <>
            <img
              src='/assets/google-authentificator-qrcode.png'
              alt='https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US'
              width={150}
              height={150}
            />
            <Paragraph>
              Scan for download
              <br />
              <Span>Android</Span>
            </Paragraph>
          </>
        ) : (
          <>
            <img
              src='/assets/google-authentificator-qrcode-apple.png'
              alt='https://apps.apple.com/ru/app/google-authenticator/id388497605'
              width={150}
              height={150}
            />
            <Paragraph>
              Scan for download <br />
              <Span>Apple</Span>
            </Paragraph>
          </>
        )}
      </DownloadStepQrcodesWrapper>
    </>
  )
}
