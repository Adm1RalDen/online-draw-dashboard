import { useEffect } from 'react'

import { Loader } from 'components/loaders/loader'

import { useAppDispatch, useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'
import { updateAuthStatusThunk } from 'store/thunks/user/authorization.thunk'

import { Router } from './router'

export const App = () => {
  const dispatch = useAppDispatch()
  const { hasUserStateLoaded } = useAppSelector(userInfoSelector)

  useEffect(() => {
    dispatch(updateAuthStatusThunk())
  }, [dispatch])

  if (!hasUserStateLoaded) return <Loader position='absolute' />
  return <Router />
}
