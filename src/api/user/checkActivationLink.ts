import { API } from 'api/const'
import axios from 'axios'

export const checkActivationLinkApi = async (link: string) => {
  return axios.get(`${API}/user/check-activate-link/${link}`)
}
