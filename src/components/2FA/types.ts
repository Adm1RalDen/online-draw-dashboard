import { AuthResponse, FunctionWithParams } from 'types'

export interface User2FAComponentProps {
  userId: string
  handleCloseModal: VoidFunction
  onSuccessCallback: FunctionWithParams<AuthResponse>
  onErrorCallback?: FunctionWithParams<string>
}
