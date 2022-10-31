export type ThemeTypes = typeof themes

export const themes = {
  colors: {
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
    greenBackground: '#183333',
    greenLiteBackground: '#2d6969',
    darkGray: '#3b3b3b',
    aqua: '#016a84',
    lightAqua: '#009cc3',
    darkAqua: '#00596f',
    aquaMiddle: '#0092b6',
    aquaGreen: '#3f6d78',
    red: '#ed1b1b',
    darkRed: '#930202',
    lightBlue: '#469CF0',
    skyBlue: '#73B3F0'
  },

  zIndex: {
    popper: 9,
    portal: 10
  },

  breakPoints: {
    desktop: '1400px',
    tablet: '800px',
    mobile: '400px'
  },

  shadows: {
    buttonFocus: 'box-shadow: 0px 0px 10px 2px #0040ff'
  },

  border: {
    gray: '#d5d5d5c8',
    liteGreen: '#6b9080'
  },

  fontSizes: {
    small: '15px',
    smallUp: '18px',
    middle: '20px',
    middleUp: '22px',
    big: '30px',
    large: '40px'
  }
}
