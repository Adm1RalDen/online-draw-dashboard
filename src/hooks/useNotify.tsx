import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { NotifyType } from 'const/enums'

export const useNotify = (hasNotify: boolean, message: string, type: NotifyType) => {
  useEffect(() => {
    if (hasNotify) {
      toast[type](message)
    }
  }, [hasNotify, message, type])
}
