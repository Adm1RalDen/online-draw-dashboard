import { KeyIcon } from '@heroicons/react/24/outline'

import { Heading4, Paragraph, Span } from 'styles/typography/styles'

import { useAppSelector } from 'store'
import { twoFaSelector } from 'store/rtk/selectors'

export const SaveKeyStep = () => {
  const { data } = useAppSelector(twoFaSelector)

  return (
    <>
      <Heading4>
        Save reserve key in <br /> security place
      </Heading4>

      <KeyIcon width={50} />
      <Paragraph>{data?.code}</Paragraph>

      <Span>This key allow you to restore you Authentificator in case of loss of the phone</Span>
    </>
  )
}
