import { verify2faApi } from 'api/user/verify2FA'
import { AxiosError } from 'axios'

import { FunctionWithParams, RefreshResponse } from './../../types'

type Params = {
  userId: string
  code: string
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
  onSuccessCallback: FunctionWithParams<RefreshResponse>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<string>>
  setAttempCount: React.Dispatch<React.SetStateAction<number>>
}

export const handleSend2FA = async ({
  code,
  userId,
  onSuccessCallback,
  setError,
  setIsLoading,
  setAttempCount,
  setIsSuccess
}: Params) => {
  try {
    setIsLoading(true)
    const res = await verify2faApi({ code, userId })
    setIsSuccess(true)
    setTimeout(() => {
      onSuccessCallback(res.data)
    }, 2000)
  } catch (e) {
    if (e instanceof AxiosError) {
      setError(e.response?.data.message || 'Occured error')
    } else {
      setError('Occured error')
    }
    setAttempCount((prev) => --prev)
  }
  setIsLoading(false)
}
