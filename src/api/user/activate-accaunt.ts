import { API } from 'api/const'
import axios from 'axios'

export const activationAccauntApi = async (link: string) => {
  return axios.get(`${API}/user/activate/${link}`)
}
