import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ErrorMessages } from 'const/enums'
import { useFormik } from 'formik'
import { FC, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useConfirmCreating2FaMutation, useSendCodeOnEmailQuery } from 'store/rtk/api'
import { Heading4, Paragraph } from 'styles/typography/styles'
import { digitInputObserver } from 'utils/digitInputObserver'

import { ButtonOutline } from 'components/button-outline'
import { Input } from 'components/input'
import { Label } from 'components/label'

import { AuthentificatorButtonsWrapper, AuthentificatorNextButton } from '../styles'
import { StepsProps } from '../types'
import { initialValues, validationSchema } from './const'

export const EnableStep: FC<StepsProps> = ({ handleDeclineStep, handleIncreaseStep }) => {
  const [submit2FaData, { isSuccess, isLoading, isError }] = useConfirmCreating2FaMutation()
  const {} = useSendCodeOnEmailQuery()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data) => submit2FaData(data)
  })

  useEffect(() => {
    if (isSuccess) {
      handleIncreaseStep()
    }
  }, [isSuccess, handleIncreaseStep])

  useEffect(() => {
    if (isError) {
      toast.error(ErrorMessages.OCCURED_ERROR)
    }
  }, [isError])

  const handleSubmit = () => formik.handleSubmit()
  const handleChangeCodes = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (digitInputObserver(e.target.value, 6)) {
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
        <ButtonOutline onClick={handleDeclineStep}>
          <ChevronLeftIcon />
          back
        </ButtonOutline>
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
