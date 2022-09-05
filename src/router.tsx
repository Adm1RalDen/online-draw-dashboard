import { WsContext } from "context/ws.context";
import { AuthPage } from "pages/auth/index";
import { PrivateRoom } from "pages/confirmAccessPage";
import { HomePage } from "pages/home";
import { LayoutComponent } from "pages/layout";
import { NotFoundPage } from "pages/notfoundPage";
import { OnlineDrawPage } from "pages/onlineDrawPage";
import { OnlineCanvas } from "pages/onlineDrawPage/canvas";
import { ServerErrorPage } from "pages/serverErrorPage";
import { UserCabinet } from "pages/userCabinet";
import { Navigate, useRoutes } from "react-router-dom";
import { userInfoSelector } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";

import { socket } from "./utils/socket";

const setRoutes = (isAuth: boolean) =>
  isAuth
    ? [
        { path: "/", element: <HomePage /> },
        { path: "/draw", element: <LayoutComponent /> },
        {
          path: "/draw_online/:roomId",
          element: (
            <OnlineDrawPage>
              <OnlineCanvas />
            </OnlineDrawPage>
          ),
        },
        { path: "/checkRoompassword/:roomId", element: <PrivateRoom /> },
        { path: "/cabinet", element: <UserCabinet /> },
        { path: "/server-error", element: <ServerErrorPage /> },
        { path: "/authorization", element: <Navigate to="/" /> },
        { path: "*", element: <NotFoundPage /> },
      ]
    : [
        { path: "/authorization", element: <AuthPage /> },
        { path: "*", element: <Navigate to="/authorization" /> },
      ];

export const Router = () => {
  const { isAuth } = useAppSelector(userInfoSelector);
  const routes = useRoutes(setRoutes(isAuth));

  if (isAuth) {
    return <WsContext.Provider value={{ socket }}>{routes}</WsContext.Provider>;
  }
  return routes;
};