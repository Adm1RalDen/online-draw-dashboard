export type ThemeTypes = typeof themes

const colors = {
  portalBackground: '#0000006f',
  dark: '#121212',
  white: '#fff',
  whiteGray: '#eee',
  littleDarkWhite: '#f3f3f3',
  black: '#000000',
  link: '#6363fa',
  gold: '#ffc800',
  green: '#00be03',
  darkGreen: '#006900',
  light_gray: '#d6d6d6',
  blue: '#0C79E2',
  gray: '#64646445',
  middleGray: '#888',
  darkBlue: '#044C93',
  middleBlue: '#0c94f6',
  greenBackground: '#042e31',
  greenLiteBackground: '#2d6969',
  darkGray: '#3b3b3b',
  aqua: '#004445',
  lightAqua: '#004445',
  darkAqua: '#00596f',
  aquaMiddle: '#027d9c',
  aquaGreen: '#3f6d78',
  red: '#ed1b1b',
  darkRed: '#930202',
  lightBlue: '#469CF0',
  skyBlue: '#73B3F0'
}

const zIndex = {
  underElement: 0,
  element: 1,
  overElement: 2,
  popper: 3,
  portal: 4
}

const breakPoints = {
  desktop: '1920px',
  laptop: '1280px',
  tablet: '768px',
  mobile: '375px'
}

const devices = {
  desktop: `screen and (max-width: ${breakPoints.desktop})`,
  laptop: `screen and (max-width: ${breakPoints.laptop})`,
  tablet: `screen and (max-width: ${breakPoints.tablet})`,
  mobile: `screen and (max-width: ${breakPoints.mobile})`
}

const shadows = {
  buttonFocus: 'box-shadow: 0px 0px 10px 2px #0040ff'
}

const border = {
  gray: '#d5d5d5c8',
  liteGreen: '#6b9080'
}

const fontSizes = {
  small: '15px',
  smallUp: '18px',
  middle: '20px',
  middleUp: '22px',
  big: '30px',
  large: '40px'
}

const spacing = {
  tiny: '5px',
  xxs: '6px',
  xs: '8px',
  s: '10px',
  base: '15px',
  sm: '20px',
  md: '25px',
  lg: '30px',
  xl: '35px',
  xxl: '40px',
  xxxl: '45px',
  large: '50px',
  xlarge: '70px'
}

export const themes = { colors, zIndex, breakPoints, devices, shadows, border, fontSizes, spacing }
