import { toast } from 'react-toastify'

import { FIleInputSizes } from 'const/enums'

import { countBytes } from './countBytes'
import { countMegaBytes } from './countMegaBytes'

export const isValidFileSize = (file: File, defaultSize = 0, notify = true) => {
  const maxSize = defaultSize || countBytes(2, FIleInputSizes.MB)
  const isValid = file.size <= maxSize

  if (!isValid && notify) {
    toast.error(
      `File is too big (should been less then ${
        defaultSize ? countMegaBytes(defaultSize).toFixed(1) + 'MB' : '2MB'
      })`
    )
  }

  return isValid
}
