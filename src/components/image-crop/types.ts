/* eslint no-unused-vars: "off" */

export type ImageCropProps = {
  fullImg: string
  savedPreviewImg: string
  width: number
  height: number
  handleSavePhoto: (crop: string, originalImage: string) => void
}
