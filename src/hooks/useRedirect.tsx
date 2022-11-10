import { useEffect } from 'react'
import { NavigateOptions, useNavigate } from 'react-router-dom'

export const useRedirect = (hasNavigate = false, url: string, params: NavigateOptions = {}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (hasNavigate) {
      navigate(url, params)
    }
  }, [hasNavigate, navigate, url, params])
}
