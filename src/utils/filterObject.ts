export const filterObject = <T extends object>(filteredOject: T, arrayOfUnusedKeys: string[]) =>
  Object.fromEntries(
    Object.entries(filteredOject).filter(([key]) => !arrayOfUnusedKeys.includes(key))
  )
