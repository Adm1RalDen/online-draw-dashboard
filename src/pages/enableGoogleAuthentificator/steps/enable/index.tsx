import { useFormik } from 'formik'
import { FC, useEffect } from 'react'

import { BackButton } from 'components/backButton'
import { Input } from 'components/input'
import { Label } from 'components/label'
import { Heading4, Paragraph } from 'styles/typography/styles'

import { ErrorMessages, NotifyType } from 'const/enums'
import { useNotify } from 'hooks/useNotify'
import { useConfirmCreating2FaMutation, useSendCodeOnEmailQuery } from 'store/rtk/services/twoFa'

import { checkForNumbersInString } from 'utils/checkForNumbersInString'

import { AuthentificatorButtonsWrapper, AuthentificatorNextButton } from '../styles'
import { StepsProps } from '../types'
import { initialValues, validationSchema } from './const'

export const EnableStep: FC<StepsProps> = ({ handleDeclineStep, handleIncreaseStep }) => {
  const [submit2FaData, { isSuccess, isLoading, isError }] = useConfirmCreating2FaMutation()
  useSendCodeOnEmailQuery()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submit2FaData
  })

  useEffect(() => {
    if (isSuccess) {
      handleIncreaseStep()
    }
  }, [isSuccess, handleIncreaseStep])

  useNotify(isError, ErrorMessages.OCCURED_ERROR, NotifyType.ERROR)

  const handleSubmit = () => formik.handleSubmit()
  const handleChangeCodes = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (checkForNumbersInString(e.target.value, 6)) {
      formik.handleChange(e)
    }
  }

  return (
    <>
      <Heading4>
        Enable Authentificator to <br /> confirm your account
      </Heading4>

      <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <Label htmlFor='emailCode'>Code from email</Label>
        <Input
          type='text'
          name='emailCode'
          onChange={handleChangeCodes}
          disabled={isLoading}
          value={formik.values.emailCode}
        />

        <Label htmlFor='secure2FACode'>Code from Authentificator</Label>
        <Input
          type='text'
          name='secure2FACode'
          disabled={isLoading}
          onChange={handleChangeCodes}
          value={formik.values.secure2FACode}
        />
      </form>

      {isError && <Paragraph>{ErrorMessages.OCCURED_ERROR}</Paragraph>}

      <AuthentificatorButtonsWrapper>
        <BackButton onClick={handleDeclineStep} />
        <AuthentificatorNextButton
          type='button'
          onClick={handleSubmit}
          disabled={(!formik.dirty && !formik.isValid) || isLoading}
        >
          {isLoading ? 'loading...' : 'next'}
        </AuthentificatorNextButton>
      </AuthentificatorButtonsWrapper>
    </>
  )
}
