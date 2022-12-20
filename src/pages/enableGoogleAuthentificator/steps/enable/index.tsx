import { Form, FormikProvider, useFormik } from 'formik'
import { FC, useEffect } from 'react'

import { BackButton } from 'components/backButton'
import { ButtonOutline } from 'components/button-outline'
import { InputField } from 'components/field'
import { FlexVrWrapper } from 'components/flex'
import { Heading4 } from 'styles/typography/styles'

import { InputTypes, NotifyType } from 'const/enums'
import { useNotify } from 'hooks/useNotify'
import { useAppDispatch, useAppSelector } from 'store'
import { useConfirmCreating2FaMutation, useSendCodeOnEmailMutation } from 'store/rtk/services/twoFa'
import { twoFaHasLetterSentSelector } from 'store/selectors/twoFa.selector'
import { enable2Fa } from 'store/slices/user.slice'

import { checkForNumbersInString } from 'utils/checkForNumbersInString'
import { getRtkRequestError } from 'utils/getRtkRequestError'

import { AuthentificatorButtonsWrapper, AuthentificatorNextButton } from '../styles'
import { StepsProps } from '../types'
import { FAILED_SENT_CODE, SUCCESS_SENT_CODE, initialValues } from './const'
import { validationSchema } from './utils'

export const EnableStep: FC<StepsProps> = ({ handleDeclineStep, handleIncreaseStep }) => {
  const [send2FaData, sending2FaStatus] = useConfirmCreating2FaMutation()
  const [sendLetter, sendingLetterStatus] = useSendCodeOnEmailMutation()

  const hasLetterSent = useAppSelector(twoFaHasLetterSentSelector)

  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: send2FaData
  })

  const isLoading = sending2FaStatus.isLoading || sendingLetterStatus.isLoading
  const disabledButton = (!formik.dirty && !formik.isValid) || isLoading

  useEffect(() => {
    if (sending2FaStatus.isSuccess) {
      handleIncreaseStep()
      dispatch(enable2Fa())
    }
  }, [sending2FaStatus.isSuccess, handleIncreaseStep, dispatch])

  useNotify(sendingLetterStatus.isError, FAILED_SENT_CODE, NotifyType.ERROR)
  useNotify(sendingLetterStatus.isSuccess, SUCCESS_SENT_CODE, NotifyType.SUCCESS)
  useNotify(sending2FaStatus.isError, getRtkRequestError(sending2FaStatus.error), NotifyType.ERROR)

  const handleSubmit = () => formik.handleSubmit()
  const handleSendLetter = () => sendLetter()

  const handleChangeCodes = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checkForNumbersInString(e.target.value, 6)) {
      formik.handleChange(e)
    }
  }

  return (
    <>
      <Heading4>
        Enable Authentificator to <br /> confirm your account
      </Heading4>

      <FormikProvider value={formik}>
        <Form>
          <FlexVrWrapper>
            <InputField
              id='emailCode'
              type={InputTypes.TEXT}
              name='emailCode'
              label='Code from email'
              onChange={handleChangeCodes}
              disabled={isLoading}
            />
            {!hasLetterSent && (
              <ButtonOutline type='button' disabled={isLoading} onClick={handleSendLetter}>
                Send code
              </ButtonOutline>
            )}
          </FlexVrWrapper>
          <InputField
            id='secure2FACode'
            type={InputTypes.TEXT}
            name='secure2FACode'
            label='Code from Authentificator'
            onChange={handleChangeCodes}
            disabled={isLoading}
          />
        </Form>
      </FormikProvider>

      <AuthentificatorButtonsWrapper>
        <BackButton onClick={handleDeclineStep} disabled={isLoading} />
        <AuthentificatorNextButton type='submit' onClick={handleSubmit} disabled={disabledButton}>
          {isLoading ? 'loading...' : 'next'}
        </AuthentificatorNextButton>
      </AuthentificatorButtonsWrapper>
    </>
  )
}
