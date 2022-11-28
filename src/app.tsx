import { useEffect } from 'react'

import { Loader } from 'components/loader'

import { useAppDispatch, useAppSelector } from 'store'
import { userIsUserStateLoadedSelector } from 'store/selectors/user.selector'
import { updateAuthStatusThunk } from 'store/thunks/user/authorization.thunk'

import { Router } from './router'

export const App = () => {
  const dispatch = useAppDispatch()
  const isUserStateLoaded = useAppSelector(userIsUserStateLoadedSelector)

  useEffect(() => {
    dispatch(updateAuthStatusThunk())
  }, [dispatch])

  if (!isUserStateLoaded) return <Loader position='absolute' />
  return <Router />
}
