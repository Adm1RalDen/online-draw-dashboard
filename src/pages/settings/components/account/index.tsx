import { FormikProvider, useFormik } from 'formik'
import { useState } from 'react'

import { InputField } from 'components/field'
import { ColorInputField } from 'components/field/color'
import { DateInputField } from 'components/field/date'
import { StyledFieldWrapper } from 'components/field/field-wrapper/styles'
import { RadioButtonsField } from 'components/field/radioButtons'
import { TextEditor } from 'components/textEditor'
import { Heading3, Label } from 'styles/typography/styles'

import { Gender, InputTypes } from 'const/enums'
import { useSocket } from 'hooks/useSocket'
import { useAppDispatch, useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { AccountSettingsAvatar } from './avatar'
import { accountFieldsData } from './const'
import {
  AccountSettingsFlexWrapper,
  AccountSettingsForm,
  AccountSettingsSection,
  AccountSettingsSubmitButton
} from './styles'
import { handleSubmit, setInitialValues, validationSchema } from './utils'

export const AccountSettings = () => {
  const [originalAvatar, setOriginalAvatar] = useState('')
  const [cropedAvatar, setCropedAvatar] = useState('')

  const userData = useAppSelector(userDataSelector)
  const socket = useSocket()

  const dispatch = useAppDispatch()

  const handleSavePictures = (croped: string, originalImage: string) => {
    setCropedAvatar(croped)
    setOriginalAvatar(originalImage)
  }

  const formik = useFormik({
    initialValues: setInitialValues(userData),
    validateOnChange: true,
    validateOnBlur: false,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (data) =>
      handleSubmit({
        updatedUserData: data,
        cropedAvatar,
        originalAvatar,
        userData,
        socket,
        dispatch
      })
  })

  return (
    <AccountSettingsSection>
      <Heading3>Public profile</Heading3>
      <AccountSettingsAvatar
        cropedPicture={cropedAvatar || userData.avatar}
        originalPicture={originalAvatar || userData.originalAvatar}
        handleSavePictures={handleSavePictures}
      />

      <FormikProvider value={formik}>
        <AccountSettingsForm onSubmit={formik.handleSubmit}>
          {accountFieldsData.map(({ key, ...field }) => (
            <InputField {...field} key={key} type={InputTypes.TEXT} />
          ))}

          <AccountSettingsFlexWrapper>
            <DateInputField name='date' label='Date of birthday' />
            <RadioButtonsField
              name='gender'
              onChange={formik.handleChange}
              values={[Gender.MALE, Gender.WOMAN]}
              defaultValue={formik.values.gender}
              label='Gender'
            />
            <ColorInputField name='color' label='Favorite color' />
          </AccountSettingsFlexWrapper>

          <StyledFieldWrapper>
            <Label>Biography</Label>
            <TextEditor
              name='biography'
              onChange={formik.setFieldValue}
              value={formik.values.biography}
            />
          </StyledFieldWrapper>

          <AccountSettingsSubmitButton type='submit'>Update profile</AccountSettingsSubmitButton>
        </AccountSettingsForm>
      </FormikProvider>
    </AccountSettingsSection>
  )
}
