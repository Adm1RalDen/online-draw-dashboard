import { NavigateFunction } from 'react-router-dom'

import { SocketApp } from 'types/socket'

export enum ToolsEnum {
  pen = 'pen',
  square = 'square',
  circle = 'circle',
  eraser = 'eraser',
  line = 'line'
}

export interface DrawConnectionProps {
  socket: SocketApp
  canvasRef: React.MutableRefObject<HTMLCanvasElement>
  roomId: string
  name: string
  userId: string
  setSnapshotList: React.Dispatch<React.SetStateAction<string[]>>
  navigate: NavigateFunction
  fillStyle: string
  strokeStyle: string
  lineWidth: number
  snapshotList: string[]
  setSnapshotIndex: React.Dispatch<React.SetStateAction<number>>
  snapshotIndex: number
}
