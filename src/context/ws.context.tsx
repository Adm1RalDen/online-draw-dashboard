import { createContext } from 'react'

import { SocketApp } from 'types/socket'

type WSContextType = {
  socket: SocketApp
}

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
export const WsContext = createContext<WSContextType>({ socket: null! })
