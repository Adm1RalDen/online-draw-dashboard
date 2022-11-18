import { breakPoints } from './breakpoints'

export const devices = {
  desktop: `screen and (max-width: ${breakPoints.desktop})`,
  laptop: `screen and (max-width: ${breakPoints.laptop})`,
  tablet: `screen and (max-width: ${breakPoints.tablet})`,
  mobile: `screen and (max-width: ${breakPoints.mobile})`
}
