import { useContext } from 'react'

import { WsContext } from 'context/ws.context'

export const useSocket = () => useContext(WsContext)
