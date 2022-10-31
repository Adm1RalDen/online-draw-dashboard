export const countBytes = (amount: number, type: 'MB' | 'KB') => {
  switch (type) {
    case 'MB':
      return amount * 1024 ** 2
    case 'KB':
      return amount * 1024
    default:
      return amount
  }
}
