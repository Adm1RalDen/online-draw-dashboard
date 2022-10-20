import { API_URL } from 'api/const'
import axios from 'axios'

export const activationAccountApi = async (link: string) => {
  return axios.get(`${API_URL}/user/activate/${link}`)
}
