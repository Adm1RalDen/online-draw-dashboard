import { toast } from 'react-toastify'

import { FileTypes, MimeTypes } from 'const/enums'

export const checkFileType = (file: File, types: FileTypes[] | MimeTypes[], notify = true) => {
  const fileType = file.type

  const isValid = types.some((type) => {
    const reg = new RegExp(`${type}`, 'i')

    return reg.test(fileType)
  })

  if (!isValid && notify) {
    toast.error(`File type is not accepted should be (${types.join(', ')})`)
  }

  return isValid
}
