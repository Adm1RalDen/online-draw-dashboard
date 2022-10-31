import axios from 'axios'

import { API_URL } from 'api/const'

export const activationAccountApi = async (link: string) => {
  return axios.get(`${API_URL}/user/activate/${link}`)
}
