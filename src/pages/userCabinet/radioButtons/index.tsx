import { FormikProps } from 'formik'
import { ChangeEvent, FC } from 'react'

import { FileInput } from 'components/fileInput'
import { Input } from 'components/input'
import { RadioButtons } from 'components/radioButton'
import { Heading4 } from 'styles/typography/styles'

import { FunctionWithParams } from 'types'

import { MALE, WOMAN } from '../const'
import { InitialStateTypes } from '../types'
import { RadioButtonsWrapper } from '../updateUserModal/styles'

type Props = {
  formik: FormikProps<InitialStateTypes>
  handleSaveBackground: FunctionWithParams<ChangeEvent<HTMLInputElement> | null>
}

export const UserRadioButtons: FC<Props> = ({ formik, handleSaveBackground }) => {
  return (
    <RadioButtonsWrapper>
      <div>
        <Heading4>Gender</Heading4>
        <RadioButtons
          name='gender'
          onChange={formik.handleChange}
          values={[MALE, WOMAN]}
          defaultValue={formik.values.gender}
        />
      </div>
      <div>
        <Heading4>Favorite color</Heading4>
        <Input
          key='color'
          name='color'
          type='color'
          value={formik.values.color}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      <div>
        <Heading4>Background image</Heading4>
        <FileInput name='backgroundFon' onChange={handleSaveBackground} />
      </div>
    </RadioButtonsWrapper>
  )
}
