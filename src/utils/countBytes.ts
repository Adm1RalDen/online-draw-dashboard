import { DataSizes } from 'const/enums'

export const countBytes = (amount: number, type: keyof typeof DataSizes) => {
  switch (type) {
    case DataSizes.MB:
      return amount * 1024 ** 2
    case DataSizes.KB:
      return amount * 1024
    default:
      return amount
  }
}
