import { Heading4 } from 'styles/typography/styles'

import { Input } from 'components/input'
import { Label } from 'components/label'

export const EnableStep = () => {
  return (
    <>
      <Heading4>
        Enable Authentificator to <br /> confirm your account
      </Heading4>
      <form>
        <Label>Code from email</Label>
        <Input type='text' />
        <Label>Code from Authentificator</Label>
        <Input type='text' />
      </form>
    </>
  )
}
