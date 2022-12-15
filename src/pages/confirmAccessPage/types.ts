import { NavigateFunction } from 'react-router-dom'

import { FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'

export interface SetAccessPageConnectionParams {
  socket: SocketApp
  navigate: NavigateFunction
  setIsLoading: FunctionWithParams<boolean>
}
