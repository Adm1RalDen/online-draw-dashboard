export const setLargeFirstLetter = (str: string) =>
  str ? str[0].toUpperCase().concat(str.slice(1)) : ''
