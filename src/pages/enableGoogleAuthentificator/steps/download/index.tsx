import { PLATFORMS } from 'const/enums'
// eslint-disable-next-line import/no-unresolved
import AndroidLogo from 'public/assets/android-logo.svg'
// eslint-disable-next-line import/no-unresolved
import AppleLogo from 'public/assets/apple-logo.svg'
import { FC, useState } from 'react'
import { Heading4, Heading6, Paragraph, Span } from 'styles/typography/styles'

import { ButtonOutline } from 'components/button-outline'

import { AuthentificatorButtonsWrapper, AuthentificatorNextButton } from '../styles'
import { StepsProps } from '../types'
import { ANDROID_ALT, ANDROID_HREF, APPLE_ALT, APPLE_HREF } from './const'
import {
  DownloadStepPlatform,
  DownloadStepPlatformsWrapper,
  DownloadStepQrcodesWrapper
} from './styles'

export const DownloadAppStep: FC<StepsProps> = ({ handleIncreaseStep }) => {
  const [platform, setPlatform] = useState<PLATFORMS.Apple | PLATFORMS.Android>(PLATFORMS.Apple)

  const changePlatformToApple = () => setPlatform(PLATFORMS.Apple)
  const changePlatformToAndroid = () => setPlatform(PLATFORMS.Android)

  return (
    <>
      <Heading4>
        Download and install <br /> Authentificator
      </Heading4>

      <DownloadStepPlatformsWrapper>
        <DownloadStepPlatform
          onClick={changePlatformToApple}
          isActive={platform === PLATFORMS.Apple}
        >
          <AppleLogo />
          <Heading6>App Store</Heading6>
        </DownloadStepPlatform>
        <DownloadStepPlatform
          onClick={changePlatformToAndroid}
          isActive={platform === PLATFORMS.Android}
        >
          <AndroidLogo />
          <Heading6>Play Market</Heading6>
        </DownloadStepPlatform>
      </DownloadStepPlatformsWrapper>

      <DownloadStepQrcodesWrapper>
        {platform === PLATFORMS.Android ? (
          <>
            <img src={ANDROID_HREF} alt={ANDROID_ALT} width={150} height={150} />
            <Paragraph>
              Scan for download
              <br />
              <Span>Android</Span>
            </Paragraph>
          </>
        ) : (
          <>
            <img src={APPLE_HREF} alt={APPLE_ALT} width={150} height={150} />
            <Paragraph>
              Scan for download <br />
              <Span>Apple</Span>
            </Paragraph>
          </>
        )}
      </DownloadStepQrcodesWrapper>

      <AuthentificatorButtonsWrapper>
        <ButtonOutline />
        <AuthentificatorNextButton onClick={handleIncreaseStep}>next</AuthentificatorNextButton>
      </AuthentificatorButtonsWrapper>
    </>
  )
}
