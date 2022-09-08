export const toLocaleDateString = (date: string) =>
  date ? new Date(date).toLocaleDateString() : ''
