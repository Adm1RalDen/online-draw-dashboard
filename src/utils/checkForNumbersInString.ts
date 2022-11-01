export const checkForNumbersInString = (str: string, amountDigits: number) => {
  const reg = new RegExp(`^[0-9]{0,${amountDigits}}$`)

  return reg.test(str)
}
