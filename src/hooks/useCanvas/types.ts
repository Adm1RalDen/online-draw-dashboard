import { NavigateFunction } from 'react-router-dom'

import { SocketApp } from 'types/socket'

export interface DrawConnectionProps {
  socket: SocketApp
  canvas: HTMLCanvasElement
  roomId: string
  userName: string
  userId: string
  navigate: NavigateFunction
}

export interface handleSetToolParams {
  tool: string
  canvas: HTMLCanvasElement
  socket: SocketApp
  roomId: string
}
