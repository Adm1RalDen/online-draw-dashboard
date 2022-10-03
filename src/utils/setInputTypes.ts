export const setInputTypes = (name: string) => {
  switch (name) {
    case 'date':
      return 'date'
    case 'age':
      return 'number'
    case 'color':
      return 'color'
    default:
      return 'text'
  }
}
