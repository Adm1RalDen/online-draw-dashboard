import { FC } from 'react'

import { useConnection } from 'hooks/useConnection'

import { WsContext } from 'context/ws.context'

import { ChildrenProps } from 'types'

export const SocketWrapper: FC<ChildrenProps> = ({ children }) => {
  const socket = useConnection()

  if (socket) {
    return <WsContext.Provider value={socket}>{children}</WsContext.Provider>
  }

  return children
}
