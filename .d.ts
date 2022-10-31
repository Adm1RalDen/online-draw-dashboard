import { ThemeTypes } from 'styles/themes'

declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
