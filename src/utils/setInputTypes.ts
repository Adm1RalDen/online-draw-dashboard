import { InputTypes } from 'const/enums'

export const setInputTypes = (name: string) => {
  switch (name) {
    case 'email':
      return InputTypes.EMAIL
    case 'password':
      return InputTypes.PASSWORD
    case 'date':
      return InputTypes.DATE
    case 'age':
      return InputTypes.NUMBER
    case 'color':
      return InputTypes.COLOR
    default:
      return InputTypes.TEXT
  }
}
