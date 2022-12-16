import { Tool } from 'canvas_classes'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { draw } from 'const/canvas'
import { DrawTools } from 'const/enums'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector, userNameSelector } from 'store/selectors/user.selector'

import { getCanvasHeight } from 'utils/getCanvasHeight'
import { getCanvasWidth } from 'utils/getCanvasWidth'
import { clearDrawConnection, setDrawConnection } from 'utils/setDrawConnection'

export const useCanvas = () => {
  const [snapshotIndex, setSnapshotIndex] = useState(-1)
  const [snapshotList, setSnapshotList] = useState<string[]>([])
  const [tool, setTool] = useState<DrawTools>(DrawTools.PEN)

  const { roomId = '' } = useParams()

  const socket = useSocket()
  const userId = useAppSelector(userIdSelector)
  const userName = useAppSelector(userNameSelector)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      canvas.width = getCanvasWidth()
      canvas.height = getCanvasHeight()

      new draw[tool](canvasRef.current, socket, roomId)

      makeSnapshot()
      setDrawConnection({
        canvas,
        userId,
        socket,
        roomId,
        userName,
        navigate
      })
    }

    return () => clearDrawConnection(socket)
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      new draw[tool](canvasRef.current, socket, roomId)
    }
  }, [tool, roomId, socket])

  const SNAPSHOTS_LIMIT = 10

  function handleReset() {
    setSnapshotIndex((index) => {
      if (index > 0 && index < SNAPSHOTS_LIMIT && canvasRef.current) {
        Tool.setSnapshot(canvasRef.current.getContext('2d'), snapshotList[index - 1])
        return index - 1
      }

      return index
    })
  }

  function handleRedo() {
    setSnapshotIndex((index) => {
      if (index < snapshotList.length - 1 && canvasRef.current) {
        Tool.setSnapshot(canvasRef.current.getContext('2d'), snapshotList[index + 1])
        return index + 1
      }

      return index
    })
  }

  function makeSnapshot() {
    setSnapshotList((prev) => {
      if (canvasRef.current) {
        if (prev.length < SNAPSHOTS_LIMIT) {
          setSnapshotIndex((index) => index + 1)
        }

        return (prev.length > SNAPSHOTS_LIMIT ? prev.slice(1, SNAPSHOTS_LIMIT) : prev).concat([
          canvasRef.current.toDataURL()
        ])
      }

      return prev
    })
  }

  return {
    snapshot: snapshotList[snapshotIndex] || null,
    ref: canvasRef,
    canvas: canvasRef.current,
    tool,
    handleRedo,
    handleReset,
    setToolhandler: setTool,
    handleSnapshot: makeSnapshot,
    changeFillStyle: Tool.changeFillStyle,
    changeLineWidth: Tool.changeLineWidth,
    changeStrokeStyle: Tool.changeStrokeStyle
  }
}
