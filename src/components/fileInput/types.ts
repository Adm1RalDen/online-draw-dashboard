import { ChangeEvent } from 'react'

import { Colors } from 'const/enums'

import { FunctionWithParams } from 'types'

export interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  name: string
  onChange: FunctionWithParams<ChangeEvent<HTMLInputElement> | null>
  colorInfo?: Colors
}
