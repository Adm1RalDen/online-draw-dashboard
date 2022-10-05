import { API } from 'api/const'
import axios from 'axios'
import { RefreshResponse, VerifyRequestData } from 'types'

export const verify2faApi = (data: VerifyRequestData) =>
  axios.post<RefreshResponse>(`${API}/user/verify`, data)
