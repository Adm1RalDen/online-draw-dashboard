import { Tool } from 'canvas_classes'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { DrawTools } from 'const/enums'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { draw, setCanvasHeight, setCanvasWidth } from './const'
import { ClearDrawConnection, SetDrawConnection } from './methods/setDrawConnection'
import { handleSnapshot, pushRedo, pushUndo } from './methods/snapshot'

export const useCanvas = () => {
  /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion*/
  const canvasRef = useRef<HTMLCanvasElement>(null!)
  const navigate = useNavigate()
  const [tool, setTool] = useState<DrawTools>(DrawTools.PEN)
  const [snapshotList, setSnapshotList] = useState<string[]>([])
  const [snapshotIndex, setSnapshotIndex] = useState(-1)
  const { socket } = useSocket()
  const { roomId = '' } = useParams()
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

      new draw[tool](canvasRef, socket, roomId)

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
    new draw[tool](canvasRef, socket, roomId)
  }, [tool, canvasRef, roomId, socket])

  const setToolhandler = (tool: DrawTools) => setTool(tool)
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
