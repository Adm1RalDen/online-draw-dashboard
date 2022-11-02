import { ChangeEvent } from 'react'

import { FunctionWithParams } from 'types'

export type FileInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  name: string
  onChange: FunctionWithParams<ChangeEvent<HTMLInputElement> | null>
  colorInfo?: 'black' | 'white'
}

export type FileInfoProps = {
  colorInfo: string | undefined
}
