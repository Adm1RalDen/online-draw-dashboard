export interface IconProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  size: number
}
