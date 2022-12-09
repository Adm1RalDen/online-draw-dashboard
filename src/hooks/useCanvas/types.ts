import { NavigateFunction } from 'react-router-dom'

import { DrawTools } from 'const/enums'

import { SocketApp } from 'types/socket'

export interface DrawConnectionProps {
  socket: SocketApp
  canvasRef: React.MutableRefObject<HTMLCanvasElement>
  roomId: string
  name: string
  userId: string
  snapshotIndex: number
  fillStyle: string
  strokeStyle: string
  lineWidth: number
  snapshotList: string[]
  navigate: NavigateFunction
  setSnapshotList: React.Dispatch<React.SetStateAction<string[]>>
  setSnapshotIndex: React.Dispatch<React.SetStateAction<number>>
}

export interface handleSetToolParams {
  tool: DrawTools
  canvasRef: React.MutableRefObject<HTMLCanvasElement>
  socket: SocketApp
  roomId: string
}
