import { useEffect, useState } from 'react'
import { useAppDispatch } from 'store/store'
import { AuthorizedThunk } from 'store/thunks/user/authorization.thunk'

import { Loader } from 'components/loaders/loader'

import { Router } from './router'

export const App = () => {
  const dispatch = useAppDispatch()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    dispatch(AuthorizedThunk()).finally(() => setIsReady(true))
  }, [dispatch])

  if (!isReady) return <Loader position='absolute' />
  return <Router />
}
