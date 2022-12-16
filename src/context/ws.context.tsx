import { createContext } from 'react'

import { SocketApp } from 'types/socket'

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
export const WsContext = createContext<SocketApp>(null!)
