import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'
import { AuthorizedThunk } from 'store/thunks/user/authorization.thunk'

import { Loader } from 'components/loaders/loader'

import { Router } from './router'

export const App = () => {
  const dispatch = useAppDispatch()
  const { hasUserStateLoaded } = useAppSelector(userInfoSelector)

  useEffect(() => {
    dispatch(AuthorizedThunk())
  }, [dispatch])

  if (!hasUserStateLoaded) return <Loader position='absolute' />
  return <Router />
}
