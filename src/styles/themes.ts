import { breakPoints } from './breakpoints'
import { colors } from './colors'
import { devices } from './devices'
import { fontSizes } from './fontsizes'
import { spacing } from './spacing'
import { zIndex } from './zindex'

export type ThemeTypes = typeof themes

export const themes = {
  colors,
  fontSizes,
  spacing,
  breakPoints,
  zIndex,
  devices
}
