type jsonParseType = {
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
