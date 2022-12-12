import { Tool } from 'canvas_classes'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { DrawTools } from 'const/enums'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector, userNameSelector } from 'store/selectors/user.selector'

import { clearDrawConnection, setDrawConnection } from './methods/setDrawConnection'
import { handleSetTool, setCanvasHeight, setCanvasWidth } from './utils'

export const useCanvas = () => {
  const [snapshotIndex, setSnapshotIndex] = useState(-1)
  const [snapshotList, setSnapshotList] = useState<string[]>([])
  const [tool, setTool] = useState<DrawTools>(DrawTools.PEN)

  const { socket } = useSocket()
  const { roomId = '' } = useParams()

  const userId = useAppSelector(userIdSelector)
  const userName = useAppSelector(userNameSelector)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      canvas.width = setCanvasWidth()
      canvas.height = setCanvasHeight()

      makeSnapshot()
      setDrawConnection({
        canvas,
        userId,
        socket,
        roomId,
        userName,
        navigate
      })

      handleSetTool({ canvas, roomId, socket, tool })
    }

    return () => clearDrawConnection(socket)
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      handleSetTool({ canvas: canvasRef.current, roomId, socket, tool })
    }
  }, [tool, canvasRef, roomId, socket])

  function handleReset() {
    setSnapshotIndex((index) => {
      if (index > 0 && index < 10 && canvasRef.current) {
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
        if (prev.length < 10) {
          setSnapshotIndex((index) => index + 1)
        }

        return (prev.length > 10 ? prev.slice(1, 10) : prev).concat([canvasRef.current.toDataURL()])
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
