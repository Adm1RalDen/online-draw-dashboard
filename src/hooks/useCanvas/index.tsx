/* eslint-disable @typescript-eslint/no-non-null-assertion*/
import { Tool } from 'canvas_classes'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { DrawTools } from 'const/enums'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { clearDrawConnection, setDrawConnection } from './methods/setDrawConnection'
import { handleSnapshot, pushRedo, pushUndo } from './methods/snapshot'
import { handleSetTool, setCanvasHeight, setCanvasWidth } from './utils'

export const useCanvas = () => {
  const [snapshotIndex, setSnapshotIndex] = useState(-1)
  const [snapshotList, setSnapshotList] = useState<string[]>([])
  const [tool, setTool] = useState<DrawTools>(DrawTools.PEN)

  const { socket } = useSocket()
  const { roomId = '' } = useParams()
  const { name, id } = useAppSelector(userDataSelector)

  const canvasRef = useRef<HTMLCanvasElement>(null!)

  const navigate = useNavigate()

  useEffect(() => {
    if (canvasRef.current !== null) {
      canvasRef.current.width = setCanvasWidth()
      canvasRef.current.height = setCanvasHeight()

      handleSnapshot({
        snapshotIndex,
        snapshotList,
        canvasRef,
        setSnapshotList,
        setSnapshotIndex
      })

      handleSetTool({ canvasRef, roomId, socket, tool })

      setDrawConnection({
        strokeStyle: Tool.strokeStyle,
        fillStyle: Tool.fillStyle,
        lineWidth: Tool.lineWidth,
        snapshotIndex,
        snapshotList,
        userId: id,
        canvasRef,
        socket,
        roomId,
        name,
        navigate,
        setSnapshotList,
        setSnapshotIndex
      })
    }

    return () => clearDrawConnection(socket)
  }, [])

  useEffect(() => {
    handleSetTool({ canvasRef, roomId, socket, tool })
  }, [tool, canvasRef, roomId, socket])

  const changeFillStyle = (color: string) =>
    Tool.changeFillStyle(canvasRef.current.getContext('2d'), color)
  const changeStrokeStyle = (color: string) =>
    Tool.changeStrokeStyle(canvasRef.current.getContext('2d'), color)
  const changeLineWidth = (size: number) =>
    Tool.changeLineWidth(canvasRef.current.getContext('2d'), size)

  const handleReset = () =>
    pushUndo(canvasRef.current.getContext('2d'), snapshotList, snapshotIndex, setSnapshotIndex)
  const handleRedo = () =>
    pushRedo(canvasRef.current.getContext('2d'), snapshotList, snapshotIndex, setSnapshotIndex)

  return {
    snapshot: snapshotList[snapshotIndex] || null,
    canvasRef,
    tool,
    handleRedo,
    handleReset,
    changeFillStyle,
    changeLineWidth,
    changeStrokeStyle,
    setToolhandler: setTool,
    handleSnapshot: () =>
      handleSnapshot({
        snapshotIndex,
        snapshotList,
        canvasRef,
        setSnapshotList,
        setSnapshotIndex
      })
  }
}
