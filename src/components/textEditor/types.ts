import { FunctionWithParams } from 'types'

export interface TextEditorProps {
  name: string
  onChange: FunctionWithParams<string>
  value: string
}
