import { useOutlet } from 'react-router-dom'

export const PrivacySettings = () => {
  const outlet = useOutlet()

  return <>{outlet}</>
}
