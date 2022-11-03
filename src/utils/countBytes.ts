import { FIleInputSizes } from 'const/enums'

export const countBytes = (amount: number, type: keyof typeof FIleInputSizes) => {
  switch (type) {
    case FIleInputSizes.MB:
      return amount * 1024 ** 2
    case FIleInputSizes.KB:
      return amount * 1024
    default:
      return amount
  }
}
