import { verify2faApi } from 'api/user/verify2FA'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { AppDispatch } from 'store'

/* eslint-disabled-next-line */
import { UserLoginThunk } from 'store/thunks/user/authorization.thunk'

type Params = {
  userId: string
  code: string
  dispatch: AppDispatch
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<string>>
  setAttempCount: React.Dispatch<React.SetStateAction<number>>
}

export const handleSend2FA = async ({
  code,
  dispatch,
  setError,
  setIsLoading,
  userId,
  setAttempCount
}: Params) => {
  try {
    setIsLoading(true)
    const res = await verify2faApi({ code, userId })
    toast.success('Authorization is success')
    dispatch(UserLoginThunk(res.data))
  } catch (e) {
    if (e instanceof AxiosError) {
      setError(e.response?.data.message || 'Occured error')
    } else {
      setError('Occured error')
    }
    setAttempCount((prev) => {
      if (prev === 1) {
        toast.error('Authorization is failure')
      }
      return --prev
    })
  }
  setIsLoading(false)
}
