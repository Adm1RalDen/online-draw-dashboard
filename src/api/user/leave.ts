import { API_URL } from 'api/const'
import { Instance } from 'api/instance'

export const handleLeave = async (userId: string, roomId: string) => {
  await Instance.put(`${API_URL}/room/leave`, { userId, roomId })
}
