import { Tool } from 'canvas_classes'

import { ChangeStateAction } from 'types'

interface HandleSnapshot {
  snapshotList: string[]
  canvas: HTMLCanvasElement
  setSnapshotIndex: ChangeStateAction<number>
  setSnapshotList: ChangeStateAction<string[]>
}

interface ChangeSnapshot {
  (
    canvas: CanvasRenderingContext2D | null,
    snapshotList: string[],
    snapshotIndex: number,
    setSnapshotIndex: ChangeStateAction<number>
  ): void
}

const pushUndo: ChangeSnapshot = (canvas, snapshotList, snapshotIndex, setSnapshotIndex) => {
  if (snapshotIndex > 0 && snapshotIndex < 10) {
    Tool.setSnapshot(canvas, snapshotList[snapshotIndex - 1])
    setSnapshotIndex((prev) => (prev -= 1))
  }
}

const pushRedo: ChangeSnapshot = (canvas, snapshotList, snapshotIndex, setSnapshotIndex) => {
  if (snapshotIndex < snapshotList.length - 1) {
    Tool.setSnapshot(canvas, snapshotList[snapshotIndex + 1])
    setSnapshotIndex((prev) => (prev += 1))
  }
}

const handleSnapshot = ({
  snapshotList,
  canvas,
  setSnapshotIndex,
  setSnapshotList
}: HandleSnapshot) => {
  if (snapshotList.length < 10) {
    setSnapshotList((prev) => [...prev, canvas.toDataURL()])
    setSnapshotIndex((prev) => prev + 1)
  } else {
    setSnapshotList((prev) => [...prev.slice(1, 10), canvas.toDataURL()])
  }
}

export { pushUndo, pushRedo, handleSnapshot }
