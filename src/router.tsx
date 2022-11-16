import { Navigate, useRoutes } from 'react-router-dom'

import { TwoFactorPage } from 'pages/2FaPage'
import { ActivationPage } from 'pages/activatePage'
import { AuthPage } from 'pages/auth/index'
import { PrivateRoom } from 'pages/confirmAccessPage'
import { DisableAuthentificator } from 'pages/disableGoogleAuthentificator'
import { EnableAuthentificator } from 'pages/enableGoogleAuthentificator'
import { FailedGoogleAuthPage } from 'pages/failedGoogleAuthPage'
import { HomePage } from 'pages/home'
import { LayoutComponent } from 'pages/layout'
import { NotFoundPage } from 'pages/notfoundPage'
import { OnlineDrawPage } from 'pages/onlineDrawPage'
import { OnlineCanvas } from 'pages/onlineDrawPage/canvas'
import { ResetPassword } from 'pages/resetPassword'
import { ResetPasswordIdentify } from 'pages/resetPassword/identify'
import { ServerErrorPage } from 'pages/serverErrorPage'
import { SettingsPage } from 'pages/settings'
import { PrivacySettings } from 'pages/settings/kategories/privacy'
import { SuccessGoogleAuth } from 'pages/successGoogleAuth'
import { UserCabinet } from 'pages/userCabinet'

import { useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'

import { WsContext } from 'context/ws.context'

import { socket } from './utils/socket'

const setRoutes = (isAuth: boolean) =>
  isAuth
    ? [
        { path: '/', element: <HomePage /> },
        { path: '/draw', element: <LayoutComponent /> },
        {
          path: '/draw_online/:roomId',
          element: (
            <OnlineDrawPage>
              <OnlineCanvas />
            </OnlineDrawPage>
          )
        },
        { path: '/checkRoompassword/:roomId', element: <PrivateRoom /> },
        { path: '/cabinet', element: <UserCabinet /> },
        { path: '/server-error', element: <ServerErrorPage /> },
        { path: '/authorization', element: <Navigate to='/' /> },
        { path: '/auth/google/twoFactor', element: <Navigate to='/' /> },
        { path: '/enable-google-authentificator', element: <EnableAuthentificator /> },
        { path: '/disable-google-authentificator', element: <DisableAuthentificator /> },
        {
          path: '/settings',
          element: <SettingsPage />,
          children: [
            { path: 'account', element: <div>account</div> },
            {
              path: 'privacy&security',
              element: <PrivacySettings />
            },
            { path: '*', element: <Navigate to='/settings' /> }
          ]
        },
        { path: '*', element: <NotFoundPage /> }
      ]
    : [
        { path: '/', element: <Navigate to='/authorization' /> },
        {
          path: '/authorization',
          element: <AuthPage />
        },
        { path: '/activate/:link', element: <ActivationPage /> },
        { path: '/auth/google/success', element: <SuccessGoogleAuth /> },
        { path: '/auth/google/failure', element: <FailedGoogleAuthPage /> },
        { path: '/auth/google/twoFactor', element: <TwoFactorPage /> },
        {
          path: '/reset-password',
          element: <ResetPassword />,
          children: [{ path: 'identify', element: <ResetPasswordIdentify /> }]
        },
        { path: '*', element: <Navigate to='/authorization' /> }
      ]

export const Router = () => {
  const { isAuth } = useAppSelector(userInfoSelector)
  const routes = useRoutes(setRoutes(isAuth))

  if (isAuth) {
    return <WsContext.Provider value={{ socket }}>{routes}</WsContext.Provider>
  }

  return routes
}
