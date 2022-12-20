import { Form, FormikProvider, useFormik } from 'formik'

import { InputField } from 'components/field'
import {
  SettingsHeading3,
  SettingsPageContantWrapper,
  SettingsSubmitButton
} from 'pages/settings/styles'

import { InputTypes } from 'const/enums'

import { noopFunction } from 'utils/noop'

import { changePasswordInitialValues } from './const'
import { changePasswordValidationSchema } from './utils'

export const SecurityChangePassword = () => {
  const formik = useFormik({
    initialValues: changePasswordInitialValues,
    validationSchema: changePasswordValidationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: noopFunction
  })

  return (
    <SettingsPageContantWrapper>
      <SettingsHeading3>Change Password</SettingsHeading3>
      <FormikProvider value={formik}>
        <Form>
          <InputField
            maxWidth
            id='oldPassword'
            name='oldPassword'
            type={InputTypes.PASSWORD}
            label='Old password'
          />
          <InputField
            maxWidth
            id='newPassword'
            name='newPassword'
            type={InputTypes.PASSWORD}
            label='New Password'
          />
          <InputField
            maxWidth
            id='confirmPassword'
            name='confirmPassword'
            type={InputTypes.PASSWORD}
            label='Confirm new password'
          />
          <SettingsSubmitButton type='submit'>Update password</SettingsSubmitButton>
        </Form>
      </FormikProvider>
    </SettingsPageContantWrapper>
  )
}
