import { toast } from 'react-toastify'

import { countBytes } from './countBytes'

export const isValidFileSize = (file: File, notify = true, defaultSize = 0) => {
  const size = defaultSize || countBytes(2, 'MB')

  if (file.size > size) {
    if (notify) {
      toast.error('File is too big (should been less then 2Mb)')
    }
    return false
  }

  return true
}
