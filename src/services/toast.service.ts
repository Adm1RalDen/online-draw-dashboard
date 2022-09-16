import { ToastOptions, toast } from 'react-toastify'

type SettingsType = Partial<ToastOptions>

const settings: Pick<ToastOptions, 'autoClose' | 'hideProgressBar'> = {
  hideProgressBar: false,
  autoClose: 5000
}

const setSettings = (data: SettingsType = {}) => ({ ...settings, ...data })

export const toastError = (str: string, data: SettingsType = {}) =>
  toast.error(str, setSettings(data))
export const toastSuccess = (str: string, data: SettingsType = {}) =>
  toast.success(str, setSettings(data))
export const toastWarn = (str: string, data: SettingsType = {}) =>
  toast.warn(str, setSettings(data))
