import { KeyIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import { useAppSelector } from 'store'
import { twoFaSelector } from 'store/selectors/twoFa.selector'
import { Heading4, Paragraph, Span } from 'styles/typography/styles'

import { ButtonOutline } from 'components/button-outline'

import { AuthentificatorButtonsWrapper, AuthentificatorNextButton } from '../styles'
import { StepsProps } from '../types'

export const SaveKeyStep: FC<StepsProps> = ({ handleDeclineStep, handleIncreaseStep }) => {
  const { secretKey } = useAppSelector(twoFaSelector)

  return (
    <>
      <Heading4>
        Save reserve key in <br /> security place
      </Heading4>

      <KeyIcon width={50} />
      <Paragraph>{secretKey}</Paragraph>

      <Span>This key allow you to restore you Authentificator in case of loss of the phone</Span>

      <AuthentificatorButtonsWrapper>
        <ButtonOutline onClick={handleDeclineStep}>
          <ChevronLeftIcon />
          back
        </ButtonOutline>
        <AuthentificatorNextButton onClick={handleIncreaseStep}>next</AuthentificatorNextButton>
      </AuthentificatorButtonsWrapper>
    </>
  )
}
