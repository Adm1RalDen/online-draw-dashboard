export interface ToggleSwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  isShowSpan?: boolean
}

export interface WrapperProps {
  isChecked: boolean
}
