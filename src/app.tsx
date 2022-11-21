import { useEffect } from 'react'

import { Loader } from 'components/loader'

import { useAppDispatch, useAppSelector } from 'store'
import { userHasUserStateLoadedSelector } from 'store/selectors/user.selector'
import { updateAuthStatusThunk } from 'store/thunks/user/authorization.thunk'

import { Router } from './router'

export const App = () => {
  const dispatch = useAppDispatch()
  const hasUserStateLoaded = useAppSelector(userHasUserStateLoadedSelector)

  useEffect(() => {
    dispatch(updateAuthStatusThunk())
  }, [dispatch])

  if (!hasUserStateLoaded) return <Loader position='absolute' />
  return <Router />
}
