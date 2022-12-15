import { createContext } from 'react'

import { WSContextTypes } from 'types/socket'

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
export const WsContext = createContext<WSContextTypes>({ socket: null! })
