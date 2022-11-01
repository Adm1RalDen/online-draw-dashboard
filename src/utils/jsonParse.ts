type jsonParseType = {
  // eslint-disable-next-line no-unused-vars
  <T>(str: string): null | T
}

export const jsonParse: jsonParseType = (str) => {
  try {
    const res = JSON.parse(str)
    return res
  } catch {
    return null
  }
}
