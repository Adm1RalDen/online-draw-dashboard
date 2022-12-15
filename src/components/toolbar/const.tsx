import { ArrowDownRightIcon, PencilIcon } from '@heroicons/react/24/outline'

import CircleIcon from 'public/assets/circle.svg'
import EraserIcon from 'public/assets/eraser.svg'
import SquareIcon from 'public/assets/square.svg'

import { DrawTools } from 'const/enums'

export const TOOLS_LIST = [
  { id: 'pen', icon: <PencilIcon />, name: DrawTools.PEN },
  { id: 'square', icon: <SquareIcon />, name: DrawTools.SQUARE },
  { id: 'circle', icon: <CircleIcon />, name: DrawTools.CIRCLE },
  { id: 'eraser', icon: <EraserIcon />, name: DrawTools.ERASER },
  { id: 'line', icon: <ArrowDownRightIcon />, name: DrawTools.LINE }
]
