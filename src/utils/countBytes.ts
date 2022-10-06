export const countBytes = (amount: number, type: 'MB' | 'GB' | 'KB') => {
  switch (type) {
    case 'GB':
      return amount * 1024 * 1024 * 1024
    case 'MB':
      return amount * 1024 * 1024
    case 'KB':
      return amount * 1024
    default:
      return amount
  }
}
