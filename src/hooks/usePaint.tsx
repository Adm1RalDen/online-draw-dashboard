import { useContext } from 'react'

import { PaintContext } from 'context/paintContext'

export const usePaint = () => useContext(PaintContext)
