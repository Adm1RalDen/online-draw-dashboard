import { toast, ToastOptions } from "react-toastify";

const settings: Pick<ToastOptions, "autoClose" | "hideProgressBar"> = {
  hideProgressBar: true,
  autoClose: false,
};

export const toastError = (str: string) => toast.error(str, settings);
export const toastSuccess = (str: string) => toast.success(str, settings);
export const toastWarn = (str: string) => toast.warn(str, settings);
