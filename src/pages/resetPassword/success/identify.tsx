import { FC } from 'react'

import { Button } from 'components/button'
import { Heading3, Paragraph } from 'styles/typography/styles'

import SuccessIcon from 'public/assets/success.svg'

export const SuccessIdentify: FC<{ handleBackNavigate: VoidFunction }> = ({
  handleBackNavigate
}) => (
  <>
    <Heading3>Successfully identified an account</Heading3>
    <div>
      <SuccessIcon width={50} />
    </div>
    <Paragraph>
      Letter with link to reset passsword was send to your email, check email and follow
      instructions.
    </Paragraph>

    <Button onClick={handleBackNavigate}>Back to login</Button>
  </>
)
