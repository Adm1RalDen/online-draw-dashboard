import { NavigateFunction } from 'react-router-dom'

import { DrawTools } from 'const/enums'

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
  tool: DrawTools
  canvas: HTMLCanvasElement
  socket: SocketApp
  roomId: string
}
