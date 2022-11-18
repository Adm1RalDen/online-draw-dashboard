import { FormikProvider, useFormik } from 'formik'

import {
  SettingsHeading3,
  SettingsPageContantWrapper,
  SettingsPageField,
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
        <form onSubmit={formik.handleSubmit}>
          <SettingsPageField
            name='oldPassword'
            type={InputTypes.PASSWORD}
            label='Old password'
            showError
          />
          <SettingsPageField
            name='newPassword'
            type={InputTypes.PASSWORD}
            label='New Password'
            showError
          />
          <SettingsPageField
            name='confirmPassword'
            type={InputTypes.PASSWORD}
            label='Confirm new password'
            showError
          />
          <SettingsSubmitButton type='submit'>Update password</SettingsSubmitButton>
        </form>
      </FormikProvider>
    </SettingsPageContantWrapper>
  )
}
