import { FC } from 'react'

import { Button } from 'components/button'
import { Heading3, Paragraph } from 'styles/typography/styles'

import SuccessIcon from 'public/assets/success.svg'

export const SuccessReset: FC<{ handleBackNavigate: VoidFunction }> = ({ handleBackNavigate }) => (
  <>
    <Heading3>Successfully Reset password</Heading3>
    <div>
      <SuccessIcon width={50} />
    </div>
    <Paragraph>
      You successfully reset your password, now you can sign in to website with your new password
    </Paragraph>

    <Button onClick={handleBackNavigate}>Back to login</Button>
  </>
)
