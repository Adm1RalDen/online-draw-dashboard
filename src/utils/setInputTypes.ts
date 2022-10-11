export const setInputTypes = (name: string) => {
  switch (name) {
    case 'email':
      return 'email'
    case 'password':
      return 'password'
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
