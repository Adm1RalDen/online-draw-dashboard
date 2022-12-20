import { XMarkIcon } from '@heroicons/react/24/outline'
import { Form, FormikProvider, useFormik } from 'formik'
import { FC } from 'react'

import { AbsoluteIconWrapper } from 'components/absolute-icon-wrapper'
import { Button } from 'components/button'
import { InputField } from 'components/field'
import { Heading2 } from 'styles/typography/styles'

import { InputTypes } from 'const/enums'
import { Disable2FAData } from 'store/rtk/types'

import { checkForNumbersInString } from 'utils/checkForNumbersInString'
import { cryptoSha256 } from 'utils/cryptoPassord'

import { FunctionWithParams } from 'types'

import { initialValues } from './const'
import { validationSchema } from './utils'

interface DisableFormProps {
  isLoading: boolean
  handleNavigate: VoidFunction
  handleDisable2Fa: FunctionWithParams<Disable2FAData>
}

export const DisableAuthentificatorForm: FC<DisableFormProps> = ({
  handleDisable2Fa,
  handleNavigate,
  isLoading
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: handleSubmit
  })

  function handleSubmit({ password, secure2FACode }: Disable2FAData) {
    const hash_password = cryptoSha256(password)
    handleDisable2Fa({ secure2FACode, password: hash_password })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (checkForNumbersInString(e.target.value, 6)) {
      formik.handleChange(e)
    }
  }

  return (
    <FormikProvider value={formik}>
      <Heading2>Disable Google Authentificator</Heading2>

      <Form>
        <InputField
          id='password'
          label='Password'
          name='password'
          type={InputTypes.PASSWORD}
          disabled={isLoading}
        />
        <InputField
          id='secure2FACode'
          label='Code from Authentificator'
          name='secure2FACode'
          type={InputTypes.TEXT}
          disabled={isLoading}
          onChange={handleChange}
        />
        <Button type='submit' disabled={(!formik.dirty && !formik.isValid) || isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>

        <AbsoluteIconWrapper>
          <XMarkIcon onClick={handleNavigate} />
        </AbsoluteIconWrapper>
      </Form>
    </FormikProvider>
  )
}
