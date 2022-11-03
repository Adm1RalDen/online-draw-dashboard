import { ChangeEvent } from 'react'

import { FunctionWithParams } from 'types'

export interface FileInputProps {
  name: string
  onChange: FunctionWithParams<ChangeEvent<HTMLInputElement> | null>
}
