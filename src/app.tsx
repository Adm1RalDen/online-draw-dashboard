import { useEffect } from "react";
import { userInfoSelector } from "store/selectors/user.selector";
import { useAppDispatch, useAppSelector } from "store/store";
import { AuthorizedThunk } from "store/thunks/user/authorization.thunk";

import { Loader } from "components/loaders/loader";

import { Router } from "./router";

export const App = () => {
  const dispatch = useAppDispatch();
  const { hasUserStateLoaded } = useAppSelector(userInfoSelector);

  useEffect(() => {
    dispatch(AuthorizedThunk());
  }, []);

  if (!hasUserStateLoaded) return <Loader position="absolute" />;
  return <Router />;
};
