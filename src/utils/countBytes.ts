import { FileInputSizes } from 'const/enums'

export const countBytes = (amount: number, type: keyof typeof FileInputSizes) => {
  switch (type) {
    case FileInputSizes.MB:
      return amount * 1024 ** 2
    case FileInputSizes.KB:
      return amount * 1024
    default:
      return amount
  }
}
