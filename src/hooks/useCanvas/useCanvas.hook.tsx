import { Tool } from 'canvas_classes'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { ToolsTypes } from 'types/canvas'

import { handleSetTool, setCanvasHeight, setCanvasWidth } from './const'
import { ClearDrawConnection, SetDrawConnection } from './methods/setDrawConnection'
import { handleSnapshot, pushRedo, pushUndo } from './methods/snapshot'
import { ToolsEnum } from './types'

type ParamsProps = {
  roomId: string
}

export const useCanvas = () => {
  /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion*/
  const canvasRef = useRef<HTMLCanvasElement>(null!)
  const navigate = useNavigate()
  const [tool, setTool] = useState<ToolsTypes>(ToolsEnum.pen)
  const [snapshotList, setSnapshotList] = useState<string[]>([])
  const [snapshotIndex, setSnapshotIndex] = useState(-1)
  const { socket } = useSocket()
  const { roomId } = useParams<ParamsProps>()
  const { name, id } = useAppSelector(userDataSelector)

  useEffect(() => {
    if (canvasRef.current !== null) {
      canvasRef.current.width = setCanvasWidth()
      canvasRef.current.height = setCanvasHeight()

      handleSnapshot({
        snapshotIndex,
        snapshotList,
        setSnapshotIndex,
        setSnapshotList,
        canvasRef
      })
      handleSetTool({ canvasRef, roomId: roomId as string, socket, tool })
      SetDrawConnection({
        userId: id,
        socket,
        canvasRef,
        roomId: roomId as string,
        name,
        navigate,
        fillStyle: Tool.fillStyle,
        strokeStyle: Tool.strokeStyle,
        lineWidth: Tool.lineWidth,
        setSnapshotList,
        snapshotList,
        setSnapshotIndex,
        snapshotIndex
      })
    }
    return () => {
      ClearDrawConnection(socket)
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, [])

  useEffect(() => {
    handleSetTool({ canvasRef, roomId: roomId as string, socket, tool })
  }, [tool, canvasRef, roomId, socket])

  const setToolhandler = (tool: ToolsTypes) => setTool(tool)
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
    canvasRef,
    tool,
    setToolhandler,
    changeFillStyle,
    changeStrokeStyle,
    changeLineWidth,
    handleReset,
    handleRedo,
    handleSnapshot: () =>
      handleSnapshot({
        snapshotIndex,
        snapshotList,
        setSnapshotIndex,
        setSnapshotList,
        canvasRef
      }),
    snapshot: snapshotList[snapshotIndex] || null
  }
}
